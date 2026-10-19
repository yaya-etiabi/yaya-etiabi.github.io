export const site = {
  name: 'Yaya Etiabi',
  heading: 'Yaya Etiabi, PhD',
  strapline: 'Applied Machine Learning Researcher',
  focus: 'Wireless Communications | Localization | Internet of Things (IoT) | Edge Intelligence',
  description: 'Research in machine learning for intelligent wireless systems, collaborative learning, sensing and localization.',
  github: 'https://github.com/Yaya195',
  scholar: 'https://scholar.google.ca/citations?user=S_lqw5EAAAAJ',
  linkedin: 'https://www.linkedin.com/in/dr-yaya-etiabi-06285a164/',
  orcid: 'https://orcid.org/0000-0003-1269-5199',
};

export function withBase(path: string): string {
  const prefix = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalized = '/' + path.replace(/^\/+/, '');
  return prefix + normalized;
}
