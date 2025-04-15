import GridArticle from "./GridArticle";
import InsetArticle from "./InsetArticle";

export default function News() {
  return (
    <div className="grid grid-container justify-items-center gap-12">
      <div className="">
        <h1 className="text-primary">News</h1>
        <p>Discover the latest news on BINHI's activities.</p>
      </div>

      <div className="grid grid-cols-[3fr_2fr] gap-4">
        <InsetArticle id={0} />

        <div className="flex flex-col gap-4">
          <InsetArticle id={0} />
          <InsetArticle id={0} />
        </div>
      </div>

      {/* Latest News */}
      <div className="grid gap-4">
        <GridArticle id={0} />
        <GridArticle id={0} />
        <GridArticle id={0} />
      </div>
    </div>
  );
}
