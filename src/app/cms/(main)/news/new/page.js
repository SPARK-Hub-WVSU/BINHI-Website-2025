import articles from '@/actions/fetch-articles';
import CheckButton from '@/components/CheckButton';
import ImageUploader from '@/components/ImageUploader';
import TextEditor from '@/components/TextEditor';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { cleanHtmlFormatting } from '@/lib/text-utils';

export default async function CreateNewArticle() {
  /** @param {FormData} formData  */
  async function submit(formData) {
    'use server';

    console.log('=== CREATE ARTICLE SERVER ACTION STARTED ===');

    const data = {
      images: formData.get('coverImages[]')?.split(',').filter(img => img.length > 0) || [],
      title: formData.get('title') || '',
      date: formData.get('date') || new Date().toISOString().split('T')[0],
      description: cleanHtmlFormatting(formData.get('description') || ''),
      author: formData.get('author') || '',
      isTopStory: formData.get('markAsTopStory') === 'on'
    };

    console.log('Parsed form data:', data);

    // Validate required fields
    if (!data.title.trim() || !data.author.trim()) {
      console.error('Missing required fields:', data);
      redirect('/cms/news?error=missing_fields');
      return;
    }

    console.log('Form validation passed');

    try {
      console.log('Starting database insert operation...');
      const result = await articles.insert(data);
      console.log('Database insert completed successfully:', result);
      
      if (result && result.length > 0) {
        console.log('Insert confirmed, redirecting to success...');
        redirect('/cms/news?success=created');
      } else {
        console.error('Insert returned empty result');
        redirect('/cms/news?error=create_failed');
      }
    } catch (error) {
      // Next.js redirect() throws a NEXT_REDIRECT error by design - this is normal behavior
      if (error.message === 'NEXT_REDIRECT') {
        console.log('Redirect successful (this is normal behavior)');
        throw error; // Re-throw to let Next.js handle the redirect
      }
      
      console.error('=== CREATE FAILED ===');
      console.error('Error type:', error.constructor.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      console.error('==================');
      redirect('/cms/news?error=create_failed');
    }
  }

  return (
    <div className="min-h-screen bg-background max-w-full overflow-hidden">
      {/* Header Section */}
      <div className="bg-white border-b border-secondary-neutral-light px-4 py-4 lg:py-6 sm:px-6 lg:px-8 max-w-full">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center text-sm text-muted mb-3 lg:mb-4 overflow-hidden">
            <Link href="/cms/news" className="hover:text-primary transition-colors duration-200 font-medium truncate">
              News Articles
            </Link>
            <span className="mx-2 text-muted-light flex-shrink-0">/</span>
            <span className="text-foreground font-medium truncate">Create New Article</span>
          </nav>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 max-w-full">
            <div className="min-w-0 flex-1">
              <h1 className="text-xl lg:text-3xl font-bold text-foreground break-words">Create New Article</h1>
              <p className="mt-1 lg:mt-2 text-sm lg:text-base text-muted break-words">Share your latest news and updates with the BINHI community</p>
            </div>
            <div className="flex sm:hidden items-center space-x-2 text-sm text-muted flex-shrink-0">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Draft</span>
            </div>
            <div className="hidden sm:block flex-shrink-0">
              <div className="flex items-center space-x-2 text-sm text-muted">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>Draft</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-4 py-6 lg:py-8 sm:px-6 lg:px-8">
        <form action={submit} className="space-y-4 lg:space-y-6 max-w-full">
          {/* Basic Information Card */}
          <div className="bg-white rounded-lg lg:rounded-xl shadow-sm border border-secondary-neutral-light overflow-hidden hover:shadow-md transition-shadow duration-200 max-w-full">
            <div className="px-4 lg:px-6 py-3 lg:py-4 border-b border-secondary-neutral-light bg-light-accent">
              <h2 className="text-base lg:text-lg font-semibold text-foreground flex items-center break-words">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary rounded-lg flex items-center justify-center mr-2 lg:mr-3 flex-shrink-0">
                  <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Basic Information
              </h2>
            </div>
            
            <div className="p-4 lg:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                {/* Article Title */}
                <div className="lg:col-span-2 min-w-0">
                  <label htmlFor="title" className="block text-sm font-semibold text-foreground mb-2">
                    Article Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    placeholder="Enter a compelling article title"
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-secondary-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary hover:border-primary transition-all duration-200 text-sm bg-white max-w-full"
                  />
                  <p className="mt-1 text-xs text-muted break-words">This will be the main headline for your article</p>
                </div>

                {/* Publication Date */}
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-foreground mb-2">
                    Publication Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    defaultValue={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-secondary-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary hover:border-primary transition-all duration-200 text-sm bg-white"
                  />
                </div>

                {/* Article Author */}
                <div className="lg:col-span-2">
                  <label htmlFor="author" className="block text-sm font-semibold text-foreground mb-2">
                    Author <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="author"
                    name="author"
                    type="text"
                    required
                    placeholder="Enter author name"
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-secondary-neutral-light rounded-lg focus:ring-2 focus:ring-primary focus:border-primary hover:border-primary transition-all duration-200 text-sm bg-white"
                  />
                </div>

                {/* Top Story Toggle */}
                <div className="flex items-center">
                  <div className="bg-secondary-lighter rounded-lg p-3 lg:p-4 w-full">
                    <label className="flex items-center cursor-pointer">
                      <CheckButton name="markAsTopStory" />
                      <div className="ml-2 lg:ml-3">
                        <span className="text-sm font-semibold text-foreground block">Mark as top story</span>
                        <span className="text-xs text-muted">Feature this article prominently</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-lg lg:rounded-xl shadow-sm border border-secondary-neutral-light overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="px-4 lg:px-6 py-3 lg:py-4 border-b border-secondary-neutral-light bg-light-accent">
              <h2 className="text-base lg:text-lg font-semibold text-foreground flex items-center">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-primary rounded-lg flex items-center justify-center mr-2 lg:mr-3">
                  <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                Article Content
              </h2>
            </div>
            
            <div className="p-4 lg:p-6">
              <label htmlFor="description" className="block text-sm font-semibold text-foreground mb-2 lg:mb-3">
                Write Your Article
              </label>
              <div className="border border-secondary-neutral-light rounded-lg overflow-hidden hover:border-primary transition-colors duration-200">
                <TextEditor name="description" />
              </div>
              <p className="mt-2 lg:mt-3 text-xs text-muted">Use the rich text editor above to format your article content with headers, lists, links, and more.</p>
            </div>
          </div>

          {/* Media Card */}
          <div className="bg-white rounded-xl shadow-sm border border-secondary-neutral-light overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="px-6 py-4 border-b border-secondary-neutral-light bg-light-accent">
              <h2 className="text-lg font-semibold text-foreground flex items-center">
                <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                Cover Images
              </h2>
            </div>
            
            <div className="p-6">
              <label className="block text-sm font-semibold text-foreground mb-3">
                Upload Article Images
              </label>
              <div className="border-2 border-dashed border-secondary-neutral-light rounded-lg p-6 hover:border-primary hover:bg-light-accent transition-all duration-200">
                <ImageUploader name="coverImages[]" />
              </div>
              <p className="mt-3 text-xs text-muted">
                Upload one or more images to accompany your article. Multiple images will be displayed in an interactive carousel for readers.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white rounded-xl shadow-sm border border-secondary-neutral-light overflow-hidden">
            <div className="px-6 py-4 border-b border-secondary-neutral-light bg-light-accent">
              <div className="flex items-center text-sm text-muted">
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-medium">Your article will be saved securely</span>
              </div>
            </div>
            
            <div className="p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <Link
                  href="/cms/news"
                  className="inline-flex items-center justify-center px-4 lg:px-6 py-2.5 lg:py-3 border border-secondary-neutral-light rounded-lg text-sm font-medium text-muted bg-white hover:bg-background hover:text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 min-h-[44px]"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 lg:px-8 py-2.5 lg:py-3 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transform hover:scale-105 transition-all duration-200 min-h-[44px]"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Create Article
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
