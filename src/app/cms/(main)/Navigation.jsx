'use client';

import { NewspaperIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const routes = [
  {
    icon: <NewspaperIcon className="size-4" />,
    label: 'News Articles',
    url: 'news',
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="px-6 w-full">
      {routes.map(({ icon, label, url }, idx) => (
        <Link
          href={url}
          className={`px-6 py-2 rounded-lg flex items-center gap-4 hover:bg-accent ${
            pathname.endsWith(url) &&
            'bg-light-accent text-primary font-semibold'
          }`}
          key={`cms-nav${idx}`}>
          {icon}
          {label}
        </Link>
      ))}
    </nav>
  );
}