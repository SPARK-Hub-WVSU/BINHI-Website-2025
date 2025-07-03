// import articles from '@/actions/fetch-articles';
import GridArticle from './GridArticle';
import InsetArticle from './InsetArticle';
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
    headline: "Upcoming Events in July",
    summary: "Join us for a series of educational events this July.",
    image: placeholderPhoto,
    date: "2025-06-05", 
  },
  {
    id: 6,
    headline: "Upcoming Events in July",
    summary: "Join us for a series of educational events this July.",
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
    <div className="grid grid-container gap-12 p-4 md:p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-primary">News</h1>
        <p>Discover the latest news on BINHI's activities.</p>
      </div>
      {children}
    </div>
    </>
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
      <div>
        <LabelSection title="Top Stories" />
        {insets()}
      </div>

      <div className="justify-self-center max-w-3xl">
        <LabelSection title="Latest News" />
        <div className="grid gap-4">
          {allArticles.map((data) => (
            <GridArticle key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}
