import { NewspaperIcon, EyeIcon, StarIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function StatsCards({ totalArticles, topStoriesCount, deletedCount }) {
  const stats = [
    {
      name: 'Total Articles',
      value: totalArticles,
      icon: NewspaperIcon,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      name: 'Top Stories',
      value: topStoriesCount,
      icon: StarIcon,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700'
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => (
        <div key={stat.name} className={`${stat.bgColor} rounded-xl p-6 border border-gray-100`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${stat.textColor} opacity-70`}>{stat.name}</p>
              <p className={`text-3xl font-bold ${stat.textColor} mt-1`}>{stat.value}</p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="size-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}