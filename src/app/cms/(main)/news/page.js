import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const topStories = [
  {
    id: 0,
    title: 'BuzzEx: Sparking Innovation with Industry Breakthroughs',
    date: new Date(2024, 3, 26),
  }
]

const latestNews = [
  {
    id: 0,
    title: 'BuzzEx: Sparking Innovation with Industry Breakthroughs',
    date: new Date(2024, 3, 26),
  }
]

export default function News() {
  return (
    <>
      <h2>News Articles</h2>
      <div className="flex gap-4 my-8">
        <Link className="flex gap-2 items-center text-background rounded-md bg-secondary-neutral-light px-6 py-2 text-sm" href="/cms/news/trash">
          <TrashIcon className="size-4" /> Trash Bin
        </Link>
        <Link className="flex gap-2 items-center text-background rounded-md bg-primary px-6 py-2 text-sm" href="/cms/news/new">
          <PlusIcon className="size-4" /> New Article
        </Link>
      </div>

      <div className="flex gap-4 flex-col my-8">
        <h3 className="font-semibold text-xl text-secondary border-b border-accent">Top Stories</h3>
        <ul>
          {topStories.map(({ id, title, date }, index) => 
            <div className="flex gap-8" key={`topstory-${index}`}>
              <p className="text-base grow">{title}</p>
              <p className="text-base opacity-60">{date.toLocaleDateString('en-US', { dateStyle: 'medium' })}</p>
              <div className="flex gap-8 px-8">
                <button className="cursor-pointer font-semibold text-primary">Edit</button>
                <button className="cursor-pointer font-semibold text-red-700">Trash</button>
              </div>
            </div>
          )}
        </ul>
      </div>

      <div className="flex gap-4 flex-col my-8">
        <h3 className="font-semibold text-xl text-secondary border-b border-accent">Latest News</h3>
        <ul>
          {latestNews.map(({ id, title, date }, index) => 
            <div className="flex gap-8" key={`latestnews-${index}`}>
              <p className="text-base grow">{title}</p>
              <p className="text-base opacity-60">{date.toLocaleDateString('en-US', { dateStyle: 'medium' })}</p>
              <div className="flex gap-8 px-8">
                <button className="cursor-pointer font-semibold text-primary">Edit</button>
                <button className="cursor-pointer font-semibold text-red-700">Trash</button>
              </div>
            </div>
          )}
        </ul>
      </div>
    </>
  );
}
