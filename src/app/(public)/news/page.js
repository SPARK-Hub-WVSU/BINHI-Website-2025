// News page for BINHI Website
// Shows top stories as a responsive carousel on mobile and a grid on desktop
// Shows latest news in a grid below
// Uses dummyArticles for demonstration

// --- Imports ---
import GridArticle from './GridArticle';
import InsetArticle from './InsetArticle';
import InsetCarousel from './InsetCarousel'; // Mobile carousel for top stories
import LabelSection from './LabelSection';
import placeholderPhoto from '@/assets/placeholder-photo.png';
// import articles from '@/actions/fetch-articles';

// --- Dummy articles data (replace with real data or API call as needed) ---
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

// --- Main News Page Component ---
export default async function News() {
  // If using real data, fetch here:
  // const allArticles = await articles.getAll();
  const allArticles = [...dummyArticles];

  // Helper: Page intro section with title and subtitle
  const intro = (children) => (
    <>
      <div className="flex flex-col items-center gap-12 p-6 md:px-8 sm:px-10 lg:px-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl">News</h1>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
            Discover the latest news on BINHI's activities.
          </p>
        </div>
        {children}
      </div>
    </>
  );

  // Helper: Responsive Top Stories section
  // - Shows a carousel on mobile (InsetCarousel)
  // - Shows a grid on desktop (InsetArticle)
  const insets = () => {
    if (allArticles.length === 0) return <></>;

    return (
      <>
        {/* Mobile: Carousel for top stories */}
        <div className="block sm:hidden">
          {/* Only show first 3 articles in the carousel */}
          <InsetCarousel articles={allArticles.slice(0, 3)} />
        </div>
        {/* Desktop: Grid for top stories */}
        <div className="hidden sm:block">
          {/* 1 article: full width */}
          {allArticles.length === 1 && (
            <div className='w-full aspect-video md:aspect-2/1 grid'>
              <InsetArticle data={allArticles.shift()} />
            </div>
          )}
          {/* 2 articles: two columns */}
          {allArticles.length === 2 && (
            <div className="grid grid-cols-2 gap-4">
              <InsetArticle data={allArticles.shift()} className="sm:min-h-75 lg:min-h-100" />
              <InsetArticle data={allArticles.shift()} className="sm:min-h-75 lg:min-h-100" />
            </div>
          )}
          {/* 3+ articles: main + two stacked */}
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

  // --- Render the page ---
  return intro(
    <>
      {/* Top Stories Section */}
      <div className='w-full max-w-6xl mx-auto'>
        <LabelSection title="Top Stories" />
        {insets()}
      </div>

      {/* Latest News Section */}
      <div className="w-full max-w-4xl mx-auto">
        <LabelSection title="Latest News" />
        <div className="grid gap-4 sm:gap-8">
          {/* Render all articles as grid items */}
          {allArticles.map((data) => (
            <GridArticle key={data.id} data={data} />
          ))}
          {/* Render empty grid articles if needed */}
          {(() => {
            // Calculate how many empty slots to show (max 3)
            let emptyCount = 0;
            if (allArticles.length === 0) emptyCount = 3;
            else if (allArticles.length === 1) emptyCount = 2;
            else if (allArticles.length === 2) emptyCount = 1;
            // Only render if less than 3 articles remaining
            return Array.from({ length: emptyCount }).map((_, idx) => (
              <div
                key={`empty-${idx}`}
                className="flex items-center justify-center min-h-[120px] max-w-[860px] max-h-[270px] p-3 sm:p-5 bg-gray-100 border-2 border-dashed border-gray-300 rounded shadow-inner text-gray-500 text-center text-base sm:text-lg"
              >
                Latest news coming soon
              </div>
            ));
          })()}
        </div>
      </div>
    </>
  );
}
