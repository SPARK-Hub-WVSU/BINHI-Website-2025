import articles from '@/actions/fetch-articles';
import GridArticle from './GridArticle';
import InsetArticle from './InsetArticle';

export default async function News() {
  const allArticles = await articles.getAll();

  return (
    <div className="grid grid-container justify-items-center gap-12">
      <div className="">
        <h1 className="text-primary">News</h1>
        <p>Discover the latest news on BINHI's activities.</p>
      </div>

      <div className="grid grid-cols-[3fr_2fr] gap-4">
        <InsetArticle data={allArticles.shift()} />

        <div className="flex flex-col gap-4">
          <InsetArticle data={allArticles.shift()} />
          <InsetArticle data={allArticles.shift()} />
        </div>
      </div>

      {/* Latest News */}
      <div className="grid gap-4">
        {allArticles.map((data) => (
          <GridArticle data={data} />
        ))}
      </div>
    </div>
  );
}
