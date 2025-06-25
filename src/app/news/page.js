import articles from '@/actions/fetch-articles';
import GridArticle from './GridArticle';
import InsetArticle from './InsetArticle';

export default async function News() {
  const allArticles = await articles.getAll();

  const intro = (children) => (
    <div className="grid grid-container justify-items-center gap-12">
      <div className="">
        <h1 className="text-primary">News</h1>
        <p>Discover the latest news on BINHI's activities.</p>
      </div>
      {children}
    </div>
  );

  const insets = () => {
    switch (allArticles.length) {
      case 0:
        return <></>;

      case 1:
        return <div className='w-full aspect-video md:aspect-2/1 grid'><InsetArticle data={allArticles.shift()} /></div>;

      case 2:
        return (
          <div className="grid grid-cols-2 gap-4">
            <InsetArticle data={allArticles.shift()} />
            <InsetArticle data={allArticles.shift()} />
          </div>
        );

      default:
        return (
          <div className="grid grid-cols-[3fr_2fr] gap-4">
            <InsetArticle data={allArticles.shift()} />

            <div className="flex flex-col gap-4">
              <InsetArticle data={allArticles.shift()} />
              <InsetArticle data={allArticles.shift()} />
            </div>
          </div>
        );
    }
  };

  return intro(
    <>
      {insets()}
      
      <div className="grid gap-4">
        {allArticles.map((data) => (
          <GridArticle data={data} />
        ))}
      </div>
    </>
  );
}
