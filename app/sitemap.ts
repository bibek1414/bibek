import { MetadataRoute } from 'next';
import { blogs, projects } from '@/lib/data';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${SITE_URL}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const routes = ([
    '',
    '/about',
    '/projects',
    '/skills',
    '/experience',
    '/certificates',
    '/services',
    '/faq',
    '/blog',
    '/profile',
    '/contact',
    '/gallery',
    '/testimonials',
    '/resume',
    '/newsletter',
    '/privacy',
    '/terms',
  ] as const).map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '/blog' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes, ...blogEntries, ...projectEntries];
}
