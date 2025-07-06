// import articles from '@/actions/fetch-articles';
import GridArticle from './GridArticle';
import InsetArticle from './InsetArticle';
import InsetCarousel from './InsetCarousel';
import Header from '../(public)/Header';
import Footer from '../(public)/Footer';
import LabelSection from './LabelSection';
import placeholderPhoto from '@/assets/placeholder-photo.png';

// Dummy articles data
const dummyArticles = [
  {
    id: 1,
    headline: "BuzzEx: Sparking Innovation with Industry Breakthroughs",
    summary: "A new initiative to support local farmers has been launched.",
    image: placeholderPhoto,
    date: "2025-07-01",
  },
  {
    id: 2,
    headline: "Community Outreach Program Success",
    summary: "The recent outreach program reached over 500 families.",
    image: placeholderPhoto,
    date: "2025-06-20",
  },
  {
    id: 3,
    headline: "BINHI Receives Environmental Award",
    summary: "Recognized for outstanding contributions to sustainability.",
    image: placeholderPhoto,
    date: "2025-06-10",
  },
  {
    id: 4,
    headline: "BuzzEx: Sparking Innovation with Industry Breakthroughs",
    summary: "Lorem ipsum deloreum Lorem ipsum deloreum Lorem ipsum deloreum Lorem ipsum deloreum (headline).",
    image: placeholderPhoto,
    date: "2025-06-05", 
  },
  {
    id: 5,
    headline: "BuzzEx: Sparking Innovation with Industry Breakthroughs",
    summary: "Lorem ipsum deloreum Lorem ipsum deloreum Lorem ipsum deloreum Lorem ipsum deloreum (headline).",
    image: placeholderPhoto,
    date: "2025-06-05", 
  },
  {
    id: 6,
    headline: "BuzzEx: Sparking Innovation with Industry Breakthroughs",
    summary: "Lorem ipsum deloreum Lorem ipsum deloreum Lorem ipsum deloreum Lorem ipsum deloreum (headline).",
    image: placeholderPhoto,
    date: "2025-06-05", 
  },
  // Add more dummy articles as needed
];

export default async function News() {
  // const allArticles = await articles.getAll();
  const allArticles = [...dummyArticles];

  const intro = (children) => (
    <>
    <div className="flex flex-col items-center gap-12 p-6 md:px-8 sm:px-10 lg:px-12">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">News</h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>Discover the latest news on BINHI's activities.</p>
      </div>
      {children}
    </div>
    </>
  );

  const insets = () => {
    if (allArticles.length === 0) return <></>;

    return (
      <>
        <div className="block sm:hidden">
          <InsetCarousel articles={allArticles.slice(0, 3)} />
        </div>
        {/* Desktop grid */}
        <div className="hidden sm:block">
          {allArticles.length === 1 && (
            <div className='w-full aspect-video md:aspect-2/1 grid'>
              <InsetArticle data={allArticles.shift()} />
            </div>
          )}
          {allArticles.length === 2 && (
            <div className="grid grid-cols-2 gap-4">
              <InsetArticle data={allArticles.shift()} />
              <InsetArticle data={allArticles.shift()} />
            </div>
          )}
          {allArticles.length > 2 && (
            <div className="grid grid-cols-[3fr_2fr] gap-4">
              <InsetArticle data={allArticles.shift()} />
              <div className="flex flex-col gap-4">
                <InsetArticle data={allArticles.shift()} />
                <InsetArticle data={allArticles.shift()} />
              </div>
            </div>
          )}
        </div>
      </>
    );
  };

  return intro(
    <>
      <div className='w-full max-w-6xl mx-auto'>
        <LabelSection title="Top Stories" />
        {insets()}
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <LabelSection title="Latest News" />
        <div className="grid gap-4 sm:gap-8">
          {allArticles.map((data) => (
            <GridArticle key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}
