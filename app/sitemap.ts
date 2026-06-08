import { MetadataRoute } from 'next';
import { blogs } from '@/lib/data';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const routes = ([
    '',
    '/about',
    '/projects',
    '/skills',
    '/experience',
    '/services',
    '/faq',
    '/blog',
    '/profile',
    '/contact',
  ] as const).map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '/blog' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes, ...blogEntries];
}
