import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const root = resolve('dist');
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');
let linksChecked = 0;
const failures = [];

function walk(folder) {
  return readdirSync(folder, { withFileTypes: true }).flatMap((item) => {
    const path = join(folder, item.name);
    return item.isDirectory() ? walk(path) : [path];
  });
}

if (!existsSync(root)) {
  console.error('No dist/ output. Run npm run build first.');
  process.exit(1);
}

const htmlFiles = walk(root).filter((file) => file.endsWith('.html'));
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const links = html.matchAll(/(?:href|src)="([^"]+)"/g);
  for (const match of links) {
    const url = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|javascript:|#|\/\/)/i.test(url)) continue;
    if (!url.startsWith('/')) continue;

    // Strip the configured Pages project subpath before resolving dist files.
    let path = url.split(/[?#]/)[0];
    if (base && path !== base && !path.startsWith(base + '/')) {
      failures.push(file + ': missing base prefix: ' + url);
      continue;
    }
    if (base) path = path.slice(base.length) || '/';
    path = decodeURIComponent(path).replace(/^\/+/, '');
    if (!path || path.endsWith('/')) path += 'index.html';
    else if (!extname(path)) path += '/index.html';
    const target = join(root, path);
    linksChecked++;
    if (!existsSync(target)) failures.push(file + ': ' + url + ' → ' + target);
  }
}
if (failures.length) {
  console.error(failures.join('\n'));
  console.error('Internal link validation failed: ' + failures.length + ' broken references.');
  process.exit(1);
}
console.log('OK: ' + htmlFiles.length + ' HTML files; ' + linksChecked + ' local asset/route references resolved.');
