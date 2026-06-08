import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { absoluteUrl } from "@/lib/seo";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm font-mono text-[#6B6661] mb-8" aria-label="Breadcrumb">
      <Link
        href="/"
        className="flex items-center hover:text-[#1C1A17] transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-[#E8E6E1]" />
          <Link
            href={item.href}
            className={`hover:text-[#1C1A17] transition-colors ${
              index === items.length - 1 ? "text-[#1C1A17] font-semibold" : ""
            }`}
            aria-current={index === items.length - 1 ? "page" : undefined}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
}
