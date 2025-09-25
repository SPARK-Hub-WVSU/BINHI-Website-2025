// News page for BINHI Website
// Shows top stories as a responsive carousel on mobile and a grid on desktop
// Shows latest news in a grid below
// Integrated with CMS data

// --- Imports ---
import GridArticle from './GridArticle';
import InsetArticle from './InsetArticle';
import InsetCarousel from './InsetCarousel'; // Mobile carousel for top stories
import LabelSection from './LabelSection';
import articles from '@/actions/fetch-articles';

// --- Main News Page Component ---
export default async function News() {
  // Fetch real articles from CMS
  const allArticles = await articles.getAll();
  
  // Separate top stories and regular articles
  const topStories = allArticles.filter(article => article.isTopStory);
  const regularArticles = allArticles.filter(article => !article.isTopStory);
  
  // Sort articles by date (newest first)
  topStories.sort((a, b) => new Date(b.date) - new Date(a.date));
  regularArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

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
    const storiesToShow = topStories.length > 0 ? topStories : regularArticles.slice(0, 3);
    
    if (storiesToShow.length === 0) {
      return (
        <div className="flex items-center justify-center min-h-[300px] bg-gray-100 border-2 border-dashed border-gray-300 rounded text-gray-500 text-center text-lg">
          No articles available. Create some articles in the CMS to see them here.
        </div>
      );
    }

    return (
      <>
        {/* Mobile: Carousel for top stories */}
        <div className="block sm:hidden">
          {/* Only show first 3 articles in the carousel */}
          <InsetCarousel articles={storiesToShow.slice(0, 3)} />
        </div>
        {/* Desktop: Grid for top stories */}
        <div className="hidden sm:block">
          {/* 1 article: full width */}
          {storiesToShow.length === 1 && (
            <div className='w-full aspect-video md:aspect-2/1 grid'>
              <InsetArticle data={storiesToShow[0]} />
            </div>
          )}
          {/* 2 articles: two columns */}
          {storiesToShow.length === 2 && (
            <div className="grid grid-cols-2 gap-4">
              <InsetArticle data={storiesToShow[0]} className="sm:min-h-75 lg:min-h-100" />
              <InsetArticle data={storiesToShow[1]} className="sm:min-h-75 lg:min-h-100" />
            </div>
          )}
          {/* 3+ articles: main + two stacked */}
          {storiesToShow.length >= 3 && (
            <div className="grid grid-cols-[3fr_2fr] gap-4">
              <InsetArticle data={storiesToShow[0]} />
              <div className="flex flex-col gap-4">
                <InsetArticle data={storiesToShow[1]} />
                <InsetArticle data={storiesToShow[2]} />
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
          {/* Render regular articles as grid items */}
          {regularArticles.length > 0 ? (
            regularArticles.map((data) => (
              <GridArticle key={data.id} data={data} />
            ))
          ) : (
            /* Show placeholder when no regular articles */
            <div className="flex items-center justify-center min-h-[120px] max-w-[860px] max-h-[270px] p-3 sm:p-5 bg-gray-100 border-2 border-dashed border-gray-300 rounded shadow-inner text-gray-500 text-center text-base sm:text-lg">
              Latest news coming soon
            </div>
          )}
          
          {/* Render empty grid articles if we have fewer than 3 regular articles */}
          {(() => {
            // Calculate how many empty slots to show (max 2 additional)
            let emptyCount = 0;
            if (regularArticles.length === 0) emptyCount = 2;
            else if (regularArticles.length === 1) emptyCount = 1;
            // Only render if less than 3 articles
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
