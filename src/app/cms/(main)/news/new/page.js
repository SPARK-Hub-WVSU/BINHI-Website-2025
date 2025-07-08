import articles from '@/actions/fetch-articles';
import users from '@/actions/fetch-users';
import CheckButton from '@/components/CheckButton';
import ImageUploader from '@/components/ImageUploader';
import TextEditor from '@/components/TextEditor';
import Link from 'next/link';

export default async function CreateNewArticle() {
  /** @param {FormData} formData  */
  async function submit(formData) {
    'use server';

    const data = {
      images: formData.get('coverImages[]').split(','),
      title: formData.get('title'),
      date: formData.get('date'),
      description: formData.get('description'),
      author: formData.get('author'),
    };

    console.log(data);
    articles.insert(data);
  }

  return (
    <>
      <h2>
        <Link href="/cms/news" className="hover:text-accent transition">
          News Articles
        </Link>{' '}
        <span className="mx-4">{`>`}</span> New Article
      </h2>
      <form
        action={submit}
        className="mt-8 grid grid-cols-3 gap-x-4 gap-y-8 max-w-xl">
        <label className="grid gap-2 col-span-2">
          <span className="text-sm">Article Title</span>
          <input
            name="title"
            type="text"
            className="rounded-md border border-secondary-neutral-light p-1"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm">Publication Date</span>
          <input
            name="date"
            type="date"
            className="rounded-md border border-secondary-neutral-light p-1"
            defaultValue={new Date().toISOString().split('T')[0]}
          />
        </label>

        <label className="grid gap-2 col-span-3">
          <span className="text-sm">Article Author</span>
          <select
            name="author"
            className="rounded-md border border-secondary-neutral-light p-1" defaultValue={0}>
            <option disabled value={0}>Select a user</option>
            {(await users.getAll()).map((data) => 
              <option value={data.id} key={`user-${data.id}`}>
                {data.name}
              </option>
            )}
          </select>
        </label>

        <label className="flex gap-2 row-start-3 col-span-3">
          <span className="text-sm">Mark as top story?</span>
          <CheckButton name="markAsTopStory" />
        </label>

        <div className="flex flex-col gap-2 row-start-4">
          <span className="text-sm">Cover Images</span>
          <ImageUploader name="coverImages[]" />
        </div>

        <div className="flex flex-col gap-2 row-start-4 col-span-2">
          <span className="text-sm">Article Description</span>
          <TextEditor name="description" />
        </div>

        <button className="bg-primary text-background rounded-lg py-1.5 cursor-pointer">
          Add Article
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
