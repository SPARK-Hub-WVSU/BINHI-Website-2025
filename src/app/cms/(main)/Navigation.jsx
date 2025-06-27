'use client';

import { ChartBarIcon, HomeIcon, InformationCircleIcon, NewspaperIcon } from '@heroicons/react/16/solid';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const routes = [
  {
    icon: <InformationCircleIcon className="size-4" />,
    label: 'Dashboard',
    url: 'dashboard',
  },
  {
    icon: <NewspaperIcon className="size-4" />,
    label: 'News Articles',
    url: 'news',
  },
  {
    icon: <HomeIcon className='size-4' />,
    label: 'Hero Section',
    url: 'hero'
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      {routes.map(({ icon, label, url }, idx) => (
        <Link
          href={url}
          className={`px-6 py-3 flex items-center gap-4 hover:bg-accent ${
            pathname.endsWith(url) && 'text-primary'
          }`}
          key={`cms-nav${idx}`}>
          {icon}
          {label}
        </Link>
      ))}
    </nav>
  );
}