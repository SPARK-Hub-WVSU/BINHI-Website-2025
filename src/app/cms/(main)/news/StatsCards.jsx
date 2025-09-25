import { NewspaperIcon, EyeIcon, StarIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function StatsCards({ totalArticles, topStoriesCount, deletedCount }) {
  const stats = [
    {
      name: 'Total Articles',
      value: totalArticles,
      icon: NewspaperIcon,
      color: 'bg-primary',
      bgColor: 'bg-light-accent',
      textColor: 'text-primary'
    },
    {
      name: 'Top Stories',
      value: topStoriesCount,
      icon: StarIcon,
      color: 'bg-accent',
      bgColor: 'bg-secondary-lighter',
      textColor: 'text-secondary'
    },
    {
      name: 'In Trash',
      value: deletedCount,
      icon: TrashIcon,
      color: 'bg-red-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
      {stats.map((stat) => (
        <div key={stat.name} className={`${stat.bgColor} rounded-lg lg:rounded-xl p-4 lg:p-6 border border-gray-100 overflow-hidden`}>
          <div className="flex items-center justify-between w-full">
            <div className="flex-1 min-w-0 overflow-hidden">
              <p className={`text-xs lg:text-sm font-medium ${stat.textColor} opacity-70 truncate`}>{stat.name}</p>
              <p className={`text-2xl lg:text-3xl font-bold text-foreground mt-1 break-all`}>{stat.value}</p>
            </div>
            <div className={`${stat.color} p-2 lg:p-3 rounded-lg flex-shrink-0 ml-3`}>
              <stat.icon className="size-5 lg:size-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}