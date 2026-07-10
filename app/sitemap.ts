import { MetadataRoute } from 'next';
import { blogs, projects } from '@/lib/data';
import { SITE_URL } from '@/lib/seo';
import { industries, MAJOR_CITIES } from '@/lib/seo-services';
import { hireRoles } from '@/lib/hire-roles';

export default function sitemap(): MetadataRoute.Sitemap {
  const hireRoleEntries: MetadataRoute.Sitemap = hireRoles.map((role) => ({
    url: `${SITE_URL}/hire/${role}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
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

  // Industry root pages, e.g. /services/ecommerce-website
  const industryRootEntries: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${SITE_URL}/services/${industry}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Industry-City combinations (using MAJOR_CITIES)
  const industryCityEntries: MetadataRoute.Sitemap = [];
  industries.forEach((industry) => {
    MAJOR_CITIES.forEach((city) => {
      if (city !== 'nepal') {
        industryCityEntries.push({
          url: `${SITE_URL}/services/${industry}/${city.toLowerCase()}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.5,
        });
      }
    });
  });

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

  return [
    ...routes,
    ...blogEntries,
    ...projectEntries,
    ...industryRootEntries,
    ...industryCityEntries,
    ...hireRoleEntries,
  ];
}
