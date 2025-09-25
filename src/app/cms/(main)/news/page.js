import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import articles from '@/actions/fetch-articles';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { revalidateAndRedirect } from '@/lib/server-actions';
import DeleteButton from './DeleteButton';
import ArticleCard from './ArticleCard';
import StatsCards from './StatsCards';
import ToastHandler from './ToastHandler';

export default async function News() {
  // Fetch real data
  const allArticles = await articles.getAll();
  const topStories = await articles.getTopStories();
  const deletedCount = (await articles.getAllDeleted()).length;
  
  // Calculate stats
  const totalArticles = allArticles.length;
  const topStoriesCount = topStories.length;

  /** @param {FormData} formData  */
  async function deleteArticle(formData) {
    'use server';
    
    console.log('=== DELETE ARTICLE SERVER ACTION STARTED ===');
    
    const id = formData.get('articleId');
    console.log('Attempting to delete article with ID:', id);
    
    try {
      console.log('Starting soft delete operation...');
      await articles.softDelete(parseInt(id));
      console.log('Soft delete completed successfully');
      
      console.log('Revalidating path...');
      revalidatePath('/cms/news');
      console.log('Redirecting to success page...');
      redirect('/cms/news?success=deleted');
      
    } catch (error) {
      // Next.js redirect() throws a NEXT_REDIRECT error by design - this is normal behavior
      if (error.message === 'NEXT_REDIRECT') {
        console.log('Redirect successful (this is normal behavior)');
        throw error; // Re-throw to let Next.js handle the redirect
      }
      
      console.error('=== DELETE FAILED ===');
      console.error('Error type:', error.constructor.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      console.error('==================');
      redirect('/cms/news?error=delete_failed');
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">News Articles</h1>
        
        <div className="flex gap-3">
          <Link className="flex gap-2 items-center text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2 text-sm font-medium transition-colors" href="/cms/news/trash">
            <TrashIcon className="size-4" /> 
            Trash Bin {deletedCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                {deletedCount}
              </span>
            )}
          </Link>
          <Link className="flex gap-2 items-center text-white bg-primary hover:bg-primary-dark rounded-lg px-4 py-2 text-sm font-medium transition-colors" href="/cms/news/new">
            <PlusIcon className="size-4" /> 
            New Article
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards 
        totalArticles={totalArticles}
        topStoriesCount={topStoriesCount}
        deletedCount={deletedCount}
      />

      {/* Top Stories Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Top Stories</h2>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {topStories.length} stories
          </span>
        </div>
        
        {topStories.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
            <div className="text-gray-400 mb-2">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">No top stories</h3>
            <p className="text-sm text-gray-500">Mark articles as top stories to feature them here</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topStories.map((article) => (
              <ArticleCard
                key={`topstory-${article.id}`}
                article={article}
                author={article.author}
                onDelete={deleteArticle}
              />
            ))}
          </div>
        )}
      </div>

      {/* All Articles Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold text-gray-900">All Articles</h2>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {allArticles.length} articles
          </span>
        </div>
        
        {allArticles.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
            <div className="text-gray-400 mb-2">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">No articles found</h3>
            <p className="text-sm text-gray-500 mb-4">Get started by creating your first article</p>
            <Link
              href="/cms/news/new"
              className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
              <PlusIcon className="size-4" />
              Create Article
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map((article) => (
              <ArticleCard
                key={`article-${article.id}`}
                article={article}
                author={article.author}
                onDelete={deleteArticle}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Toast Handler for Success/Error Messages */}
      <ToastHandler />
    </div>
  );
}
