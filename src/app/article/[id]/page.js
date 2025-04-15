import articles from "@/actions/fetch-articles";
import Image from "next/image";

export default async function Article({ params }) {
    const { id } = await params;
    const data = (await articles.getData(id))[0];

    console.log(data);
    
    return (
        <div className="grid grid-container gap-4 py-12">
            <p className="text-base pb-3 border-b border-b-gray-800">Article</p>
            <h1 className="text-5xl/18 text-left text-foreground">{data.headline}</h1>
            <div className="flex flex-col gap-2">
                <p className="text-base">{new Date(data.date).toLocaleDateString('en-us', { dateStyle: 'long' })}</p>
                {/* <p className="text-base">{}</p> */}
            </div>

            <Image src={data.image || null} alt={data.headline} className="aspect-video md:aspect-2/1 w-full bg-gray-500" />
            <div className="flex flex-col px-16 gap-2">
                {data.content.split("\\n").map(p => (<p className="text-base">{p.trim()}</p>))}
            </div>
        </div>
    );
}