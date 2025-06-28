import CheckButton from "@/components/CheckButton";
import ImageUploader from "@/components/ImageUploader";

export default function CreateNewArticle() {
  async function submit(formData) {
    'use server';


  }

  return (
    <>
      <h2>News Articles <span className="mx-4">{`>`}</span> New Article</h2>
      <form action={submit} className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
        
        <label className="grid gap-2 col-span-2">
          <span className="text-sm">Article Title</span>
          <input name="title" type="text" className="rounded-md border border-secondary-neutral-light p-1" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm">Publication Date</span>
          <input name="date" type="date" className="rounded-md border border-secondary-neutral-light p-1" />
        </label>

        <label className="grid gap-2 col-span-2">
          <span className="text-sm">Article Author</span>
          <input name="author" type="text" className="rounded-md border border-secondary-neutral-light p-1" />
        </label>

        <label className="flex gap-2 row-start-3">
          <span className="text-sm">Mark as top story?</span>
          <CheckButton name="markAsTopStory" />
        </label>

        <label className="flex flex-col gap-2 row-start-4">
          <span className="text-sm">Cover Images</span>
          <ImageUploader name='coverImage' />
        </label>

        <label className="flex flex-col gap-2 row-start-4 col-span-2">
          <span className="text-sm">Article Description</span>
          <textarea rows='8' className="rounded-md border border-secondary-neutral-light p-1 resize-y"></textarea>
        </label>
        
      </form>
    </>
  )
}