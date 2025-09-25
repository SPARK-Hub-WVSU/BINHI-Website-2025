import { auth } from '@/auth';
import Link from 'next/link';
import { 
    NewspaperIcon, 
    PlusIcon, 
    ChartBarIcon,
    EyeIcon,
    ClockIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';
import articles from '@/actions/fetch-articles';

// Helper function to format dates safely
function formatDate(dateInput) {
    try {
        if (!dateInput) return 'No date';
        
        // Handle different date formats
        let date;
        if (typeof dateInput === 'string') {
            // Handle ISO date strings or date-only strings
            date = new Date(dateInput);
        } else if (dateInput instanceof Date) {
            date = dateInput;
        } else {
            return 'Invalid date';
        }
        
        // Check if date is valid
        if (isNaN(date.getTime())) {
            return 'Invalid date';
        }
        
        // Format as readable date
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    } catch (error) {
        console.error('Date formatting error:', error);
        return 'Invalid date';
    }
}

export default async function CMSDashboard() {
    const session = await auth();
    const allArticles = await articles.getAll();
    const topStories = await articles.getTopStories();
    
    const stats = [
        {
            name: 'Total Articles',
            value: allArticles.length,
            icon: NewspaperIcon,
            color: 'bg-primary'
        },
        {
            name: 'Top Stories',
            value: topStories.length,
            icon: ChartBarIcon,
            color: 'bg-accent'
        },
        {
            name: 'Recent Activity',
            value: 'Updated',
            icon: ClockIcon,
            color: 'bg-secondary'
        }
    ];

    const quickActions = [
        {
            title: 'Create New Article',
            description: 'Write and publish a new article',
            href: '/cms/news/new',
            icon: PlusIcon,
            color: 'bg-primary',
            primary: true
        },
        {
            title: 'Manage Articles',
            description: 'Edit, update, or delete existing articles',
            href: '/cms/news',
            icon: NewspaperIcon,
            color: 'bg-accent'
        },
        {
            title: 'View Website',
            description: 'See your published content live',
            href: '/',
            icon: EyeIcon,
            color: 'bg-secondary',
            external: true
        }
    ];

    return (
        <div className="space-y-4 lg:space-y-6 max-w-full">
            {/* Welcome Header */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg lg:rounded-xl p-4 lg:p-6 border border-primary/10 max-w-full">
                <h1 className="text-xl lg:text-3xl font-bold text-foreground mb-2 lg:mb-3 break-words max-w-4xl">
                    Welcome back, {session.user.name?.split(' ')[0]}!
                </h1>
                <p className="text-muted text-sm lg:text-lg leading-relaxed break-words max-w-4xl">
                    Manage your BINHI website content from this dashboard. Create articles, 
                    update existing content, and keep your community informed.
                </p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {stats.map((stat) => (
                    <div
                        key={stat.name}
                        className="bg-white rounded-lg lg:rounded-xl p-4 lg:p-6 border border-secondary-neutral-light hover:shadow-lg transition-all duration-200 overflow-hidden"
                    >
                        <div className="flex items-center justify-between w-full">
                            <div className="flex-1 min-w-0 overflow-hidden">
                                <p className="text-xs lg:text-sm font-medium text-muted mb-1 truncate">{stat.name}</p>
                                <p className="text-2xl lg:text-3xl font-bold text-black break-all">{stat.value}</p>
                            </div>
                            <div className={`${stat.color} p-3 lg:p-3 rounded-lg lg:rounded-xl flex-shrink-0 ml-3`}>
                                <stat.icon className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-secondary-neutral-light">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6">
                    <h2 className="text-lg lg:text-2xl font-semibold text-foreground mb-2 sm:mb-0">Quick Actions</h2>
                    <Link
                        href="/cms/news"
                        className="text-primary hover:text-primary-dark font-medium flex items-center gap-2 text-sm self-start sm:self-auto"
                    >
                        View All Articles
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 gap-4 lg:gap-6">
                    {quickActions.map((action) => (
                        <Link
                            key={action.title}
                            href={action.href}
                            target={action.external ? '_blank' : undefined}
                            className={`group relative p-4 lg:p-6 rounded-lg lg:rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
                                action.primary 
                                    ? 'border-primary/20 bg-primary/5 hover:border-primary/40' 
                                    : 'border-secondary-neutral-light hover:border-primary/20 hover:bg-primary/5'
                            }`}
                        >
                            <div className="flex items-center">
                                <div className={`${action.color} w-12 h-12 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}>
                                    <action.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base lg:text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                        {action.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed">
                                        {action.description}
                                    </p>
                                </div>
                                {action.external && (
                                    <div className="ml-3 flex-shrink-0">
                                        <ArrowRightIcon className="w-5 h-5 text-muted group-hover:text-primary transition-colors transform rotate-45" />
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recent Articles Preview */}
            {allArticles.length > 0 && (
                <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-secondary-neutral-light">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6">
                        <h2 className="text-lg lg:text-2xl font-semibold text-foreground mb-2 sm:mb-0">Recent Articles</h2>
                        <Link
                            href="/cms/news"
                            className="text-primary hover:text-primary-dark font-medium flex items-center gap-2 text-sm self-start sm:self-auto"
                        >
                            Manage All
                            <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>
                    
                    <div className="space-y-3 lg:space-y-4">
                        {allArticles.slice(0, 3).map((article) => (
                            <Link
                                key={article.id}
                                href={`/cms/news/${article.id}/edit`}
                                className="flex items-center p-3 lg:p-4 rounded-lg border border-secondary-neutral-light hover:bg-light-accent transition-colors group"
                            >
                                <div className="w-10 h-10 lg:w-10 lg:h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-3 lg:mr-4">
                                    <NewspaperIcon className="w-5 h-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm lg:text-base truncate mb-1">
                                        {article.title || article.headline}
                                    </h3>
                                    <p className="text-xs lg:text-sm text-muted">
                                        {formatDate(article.date)}
                                    </p>
                                </div>
                                <ArrowRightIcon className="w-4 h-4 text-muted group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}