import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gracechristianacademy-hn.com';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/oferta-academica`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/testimonios`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/acerca-nosotros`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contactanos`,
      lastModified: new Date(),
      priority: 0.6,
    },
  ];
}
