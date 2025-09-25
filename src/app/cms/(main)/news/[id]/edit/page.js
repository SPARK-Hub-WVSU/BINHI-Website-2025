import articles from '@/actions/fetch-articles';
import CheckButton from '@/components/CheckButton';
import ImageUploader from '@/components/ImageUploader';
import TextEditor from '@/components/TextEditor';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { cleanHtmlFormatting } from '@/lib/text-utils';

export default async function EditArticle({ params }) {
  const { id } = params;
  
  // Fetch article data
  const articleData = await articles.getData(parseInt(id));
  if (!articleData || articleData.length === 0) {
    redirect('/cms/news');
  }
  
  const article = articleData[0];
  
  /** @param {FormData} formData  */
  async function updateArticle(formData) {
    'use server';

    console.log('=== UPDATE ARTICLE SERVER ACTION STARTED ===');

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
    console.log('Article ID to update:', id);

    try {
      console.log('Starting database update operation...');
      const result = await articles.update(parseInt(id), data);
      console.log('Database update completed successfully:', result);
      
      if (result && result.length > 0) {
        console.log('Update confirmed, redirecting to success...');
        redirect('/cms/news?success=updated');
      } else {
        console.error('Update returned empty result');
        redirect('/cms/news?error=update_failed');
      }
    } catch (error) {
      // Next.js redirect() throws a NEXT_REDIRECT error by design - this is normal behavior
      if (error.message === 'NEXT_REDIRECT') {
        console.log('Redirect successful (this is normal behavior)');
        throw error; // Re-throw to let Next.js handle the redirect
      }
      
      console.error('=== UPDATE FAILED ===');
      console.error('Error type:', error.constructor.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      console.error('===================');
      redirect('/cms/news?error=update_failed');
    }
  }

  return (
    <>
      <h2>
        <Link href="/cms/news" className="hover:text-accent transition">
          News Articles
        </Link>{' '}
        <span className="mx-4">{`>`}</span> Edit Article
      </h2>
      <form
        action={updateArticle}
        className="mt-8 grid grid-cols-3 gap-x-4 gap-y-8 max-w-xl">
        <label className="grid gap-2 col-span-2">
          <span className="text-sm">Article Title</span>
          <input
            name="title"
            type="text"
            defaultValue={article.title}
            className="rounded-md border border-secondary-neutral-light p-1"
            required
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm">Publication Date</span>
          <input
            name="date"
            type="date"
            defaultValue={article.date}
            className="rounded-md border border-secondary-neutral-light p-1"
          />
        </label>

        <label className="grid gap-2 col-span-3">
          <span className="text-sm">Article Author</span>
          <input
            type="text"
            name="author"
            className="rounded-md border border-secondary-neutral-light p-1" 
            defaultValue={article.author}
            placeholder="Enter author name"
            required
          />
        </label>

        <label className="flex gap-2 row-start-3 col-span-3">
          <span className="text-sm">Mark as top story?</span>
          <CheckButton name="markAsTopStory" checked={article.isTopStory || false} />
        </label>

        <div className="flex flex-col gap-2 row-start-4">
          <span className="text-sm">Cover Images</span>
          <ImageUploader name="coverImages[]" defaultImages={article.images} />
        </div>

        <div className="flex flex-col gap-2 row-start-4 col-span-2">
          <span className="text-sm">Article Description</span>
          <TextEditor name="description" defaultValue={article.description} />
        </div>

        <button className="bg-primary text-background rounded-lg py-1.5 cursor-pointer">
          Update Article
        </button>

        <Link
          href="/cms/news"
          className="text-center py-1.5 text-secondary font-medium">
          Cancel
        </Link>
      </form>
    </>
  );
}