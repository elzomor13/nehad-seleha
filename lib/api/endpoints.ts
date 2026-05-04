const endpoints = {
  shows:        '/shows',
  show:         (id: string) => `/shows/${id}`,
  events:       '/events',
  event:        (id: string) => `/events/${id}`,
  news:         '/api/news/',
  newsArticle:  (slug: string) => `/api/news/${slug}/`,
  gallery:      '/gallery',
  hero:         '/hero',
} as const;

export default endpoints;
