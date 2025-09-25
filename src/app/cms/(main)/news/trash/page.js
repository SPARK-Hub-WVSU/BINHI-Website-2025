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
    <div className="max-w-7xl mx-auto max-w-full overflow-hidden">
      {/* Header */}
      <div className="mb-6 lg:mb-8">
        <div className="flex items-center gap-3 lg:gap-4 mb-4">
          <Link 
            href="/cms/news"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ArrowLeftIcon className="size-4 lg:size-5 flex-shrink-0" />
            <span className="font-medium text-sm lg:text-base">Back to Articles</span>
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
          <div className="flex items-center gap-3">
            <div className="p-2 lg:p-3 bg-red-100 rounded-lg lg:rounded-xl flex-shrink-0">
              <TrashIcon className="size-6 lg:size-8 text-red-600" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-xl lg:text-3xl font-bold text-gray-900 break-words">Trash Bin</h1>
              <p className="text-gray-600 mt-1 text-sm lg:text-base break-words">Manage deleted articles and restore them if needed</p>
            </div>
          </div>
          
          {deletedArticles.length > 0 && (
            <div className="flex items-center justify-between lg:justify-end gap-4 flex-shrink-0">
              <div className="text-left lg:text-right">
                <div className="text-xl lg:text-2xl font-bold text-gray-900">{deletedArticles.length}</div>
                <div className="text-xs lg:text-sm text-gray-500">Deleted Article{deletedArticles.length !== 1 ? 's' : ''}</div>
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
        <div className="text-center py-12 lg:py-16 bg-white rounded-lg lg:rounded-xl border border-gray-100 shadow-sm mx-4 lg:mx-0">
          <div className="mx-auto w-20 h-20 lg:w-24 lg:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4 lg:mb-6">
            <TrashIcon className="size-10 lg:size-12 text-gray-400" />
          </div>
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 px-4">Trash bin is empty</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm lg:text-base px-4 break-words">
            When you delete articles, they'll appear here. You can restore them or delete them permanently.
          </p>
          <Link
            href="/cms/news"
            className="inline-flex items-center gap-2 bg-primary text-white px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors text-sm lg:text-base">
            <ArrowLeftIcon className="size-4" />
            Back to Articles
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg lg:rounded-xl shadow-sm border border-gray-100 overflow-hidden mx-4 lg:mx-0">
          <div className="px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-100 bg-gray-50">
            <h2 className="font-semibold text-base lg:text-lg text-gray-900">
              Deleted Articles ({deletedArticles.length})
            </h2>
            <p className="text-xs lg:text-sm text-gray-600 mt-1 break-words">
              Articles will be automatically deleted permanently after 30 days
            </p>
          </div>
          
          <div className="divide-y divide-gray-100">
            {deletedArticles.map((article, index) => (
              <div 
                key={`deleted-${article.id}`}
                className="p-4 lg:p-6 hover:bg-gray-50 transition-colors group">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6">
                  {/* Article Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 lg:gap-3 mb-2">
                      <h3 className="text-base lg:text-lg font-semibold text-gray-900 truncate min-w-0">
                        {article.title}
                      </h3>
                      {index < 3 && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full self-start sm:self-auto flex-shrink-0">
                          Recent
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-xs lg:text-sm mb-3 line-clamp-2 break-words">
                      {stripHtmlBrowser(article.description, 150) || 'No description available'}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs lg:text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <UserIcon className="size-3 lg:size-4 flex-shrink-0" />
                        <span className="truncate">{article.author || 'Unknown Author'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="size-3 lg:size-4 flex-shrink-0" />
                        <span className="truncate">{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="size-3 lg:size-4 flex-shrink-0" />
                        <span className="truncate">Deleted {formatRelativeDate(article.deletedAt)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex-shrink-0 self-start lg:self-auto">
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
        <div className="mt-6 lg:mt-8 bg-amber-50 border border-amber-200 rounded-lg lg:rounded-xl p-4 lg:p-6 mx-4 lg:mx-0">
          <div className="flex flex-col sm:flex-row sm:items-start gap-3">
            <div className="flex-shrink-0 self-center sm:self-start">
              <ExclamationTriangleIcon className="size-5 lg:size-6 text-amber-600 mt-0 sm:mt-0.5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-amber-900 mb-1 text-sm lg:text-base">Important Notice</h3>
              <p className="text-amber-800 text-xs lg:text-sm break-words leading-relaxed">
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