'use client';

import { 
  HomeIcon,
  NewspaperIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const routes = [
  {
    icon: <HomeIcon className="w-5 h-5" />,
    label: 'Dashboard',
    url: '/cms',
  },
  {
    icon: <NewspaperIcon className="w-5 h-5" />,
    label: 'Articles',
    url: '/cms/news',
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="hidden lg:block p-4 space-y-2">
        {routes.map(({ icon, label, url }, idx) => {
          const isActive = (url === '/cms' && pathname === '/cms') || 
                          (url !== '/cms' && pathname.startsWith(url));
          
          return (
            <Link
              href={url}
              className={`w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-200 ${
                isActive
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-muted hover:bg-light-accent hover:text-primary'
              }`}
              key={`cms-nav${idx}`}
            >
              {icon}
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden px-4 py-1.5">
        <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
          {routes.map(({ icon, label, url }, idx) => {
            const isActive = (url === '/cms' && pathname === '/cms') || 
                            (url !== '/cms' && pathname.startsWith(url));
            
            return (
              <Link
                href={url}
                className={`flex-shrink-0 px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-muted hover:bg-light-accent hover:text-primary'
                }`}
                key={`cms-nav-mobile${idx}`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}