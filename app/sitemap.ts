import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nmas.co.za'

  const solutions = [
    'end-user-computing',
    'servers-and-storage',
    'networking',
    'printing',
    'collaboration',
    'software-licensing',
    'accessories',
  ]

  const solutionUrls = solutions.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...solutionUrls,
  ]
}
