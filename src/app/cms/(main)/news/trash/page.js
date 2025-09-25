import { ArrowLeftIcon, TrashIcon, ExclamationTriangleIcon, ClockIcon, UserIcon, CalendarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import articles from '@/actions/fetch-articles';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import TrashActions from './TrashActions';
import CleanAllButton from './CleanAllButton';
import ToastHandler from '../ToastHandler';
import { stripHtml, stripHtmlBrowser, formatTimeAgo, formatRelativeDate } from '@/lib/text-utils';

export default async function TrashBin() {
  const deletedArticles = await articles.getAllDeleted();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  /** @param {FormData} formData  */
  async function restoreArticle(formData) {
    'use server';
    
    console.log('=== RESTORE ARTICLE SERVER ACTION STARTED ===');
    
    const id = formData.get('articleId');
    console.log('Attempting to restore article with ID:', id);
    
    try {
      console.log('Starting restore operation...');
      await articles.restore(parseInt(id));
      console.log('Restore completed successfully');
      
      console.log('Revalidating paths...');
      revalidatePath('/cms/news/trash');
      revalidatePath('/cms/news');
      console.log('Redirecting to success page...');
      redirect('/cms/news?success=restored');
      
    } catch (error) {
      // Next.js redirect() throws a NEXT_REDIRECT error by design - this is normal behavior
      if (error.message === 'NEXT_REDIRECT') {
        console.log('Redirect successful (this is normal behavior)');
        throw error; // Re-throw to let Next.js handle the redirect
      }
      
      console.error('=== RESTORE FAILED ===');
      console.error('Error type:', error.constructor.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      console.error('==================');
      redirect('/cms/news/trash?error=restore_failed');
    }
  }

  /** @param {FormData} formData  */
  async function permanentDeleteArticle(formData) {
    'use server';
    
    console.log('=== PERMANENT DELETE ARTICLE SERVER ACTION STARTED ===');
    
    const id = formData.get('articleId');
    console.log('Attempting to permanently delete article with ID:', id);
    
    try {
      console.log('Starting permanent delete operation...');
      await articles.permanentDelete(parseInt(id));
      console.log('Permanent delete completed successfully');
      
      console.log('Revalidating path...');
      revalidatePath('/cms/news/trash');
      console.log('Redirecting to success page...');
      redirect('/cms/news/trash?success=permanently_deleted');
      
    } catch (error) {
      // Next.js redirect() throws a NEXT_REDIRECT error by design - this is normal behavior
      if (error.message === 'NEXT_REDIRECT') {
        console.log('Redirect successful (this is normal behavior)');
        throw error; // Re-throw to let Next.js handle the redirect
      }
      
      console.error('=== PERMANENT DELETE FAILED ===');
      console.error('Error type:', error.constructor.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      console.error('==================');
      redirect('/cms/news/trash?error=permanent_delete_failed');
    }
  }

  /** @param {FormData} formData  */
  async function cleanAllTrash(formData) {
    'use server';
    
    console.log('=== CLEAN ALL TRASH SERVER ACTION STARTED ===');
    
    try {
      console.log('Starting bulk permanent delete operation...');
      
      // Get all deleted articles and delete them permanently
      const allDeleted = await articles.getAllDeleted();
      console.log(`Found ${allDeleted.length} articles to permanently delete`);
      
      if (allDeleted.length === 0) {
        console.log('No articles to delete');
        redirect('/cms/news/trash?error=no_articles_to_delete');
        return;
      }
      
      // Delete each article permanently
      for (const article of allDeleted) {
        await articles.permanentDelete(article.id);
        console.log(`Permanently deleted article ID: ${article.id}`);
      }
      
      console.log(`Successfully deleted ${allDeleted.length} articles permanently`);
      
      console.log('Revalidating path...');
      revalidatePath('/cms/news/trash');
      console.log('Redirecting to success page...');
      redirect('/cms/news/trash?success=all_cleaned');
      
    } catch (error) {
      // Next.js redirect() throws a NEXT_REDIRECT error by design - this is normal behavior
      if (error.message === 'NEXT_REDIRECT') {
        console.log('Redirect successful (this is normal behavior)');
        throw error; // Re-throw to let Next.js handle the redirect
      }
      
      console.error('=== CLEAN ALL TRASH FAILED ===');
      console.error('Error type:', error.constructor.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      console.error('==================');
      redirect('/cms/news/trash?error=clean_all_failed');
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link 
            href="/cms/news"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeftIcon className="size-5" />
            <span className="font-medium">Back to Articles</span>
          </Link>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-100 rounded-xl">
              <TrashIcon className="size-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Trash Bin</h1>
              <p className="text-gray-600 mt-1">Manage deleted articles and restore them if needed</p>
            </div>
          </div>
          
          {deletedArticles.length > 0 && (
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{deletedArticles.length}</div>
                <div className="text-sm text-gray-500">Deleted Article{deletedArticles.length !== 1 ? 's' : ''}</div>
              </div>
              
              {/* Clean All Trash Button */}
              <CleanAllButton 
                articlesCount={deletedArticles.length}
                onCleanAll={cleanAllTrash}
              />
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      {deletedArticles.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <TrashIcon className="size-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Trash bin is empty</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            When you delete articles, they'll appear here. You can restore them or delete them permanently.
          </p>
          <Link
            href="/cms/news"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors">
            <ArrowLeftIcon className="size-4" />
            Back to Articles
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="font-semibold text-lg text-gray-900">
              Deleted Articles ({deletedArticles.length})
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Articles will be automatically deleted permanently after 30 days
            </p>
          </div>
          
          <div className="divide-y divide-gray-100">
            {deletedArticles.map((article, index) => (
              <div 
                key={`deleted-${article.id}`}
                className="p-6 hover:bg-gray-50 transition-colors group">
                <div className="flex items-start justify-between gap-6">
                  {/* Article Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {article.title}
                      </h3>
                      {index < 3 && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                          Recent
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {stripHtmlBrowser(article.description, 150) || 'No description available'}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <UserIcon className="size-4" />
                        <span>{article.author || 'Unknown Author'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="size-4" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="size-4" />
                        <span>Deleted {formatRelativeDate(article.deletedAt)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex-shrink-0">
                    <TrashActions 
                      articleId={article.id} 
                      onRestore={restoreArticle}
                      onPermanentDelete={permanentDeleteArticle}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Warning Notice */}
      {deletedArticles.length > 0 && (
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <ExclamationTriangleIcon className="size-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">Important Notice</h3>
              <p className="text-amber-800 text-sm">
                Articles in the trash bin are automatically deleted permanently after 30 days. 
                Make sure to restore any articles you want to keep before they're permanently removed.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Toast Handler for Success/Error Messages */}
      <ToastHandler />
    </div>
  );
}