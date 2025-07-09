"use client";

// GridArticle component
// Renders a single news article in a grid layout for the "Latest News" section
// - Displays an image, headline, summary (on sm+), and date
// - Responsive: stacks content on small screens, expands on larger screens
// - Uses a placeholder image if no image is provided

import Image from "next/image";
import placeholderPhoto from '@/assets/placeholder-photo.png';
import Link from "next/link";

export default function GridArticle({ data }) {
    return (
        // Article card as a clickable link
        <Link
            className="group grid grid-cols-[1fr_3fr] gap-3 sm:gap-5 p-3 sm:p-5 max-w-[860px] max-h-[270px] min-h-[120px] shadow-lg"
            href={`/article/${data.id}`}
        >
            {/* Article image (uses placeholder if missing) */}
            <Image
                src={data.image || placeholderPhoto}
                alt={data.headline}
                className="aspect-[4/3] min-w-[100px] min-h-[100px] sm:min-w-[250px] object-cover object-center h-full"
                width={data.width || 800}
                height={data.height || 450}
            />
            {/* Article text content */}
            <div className="flex flex-col gap-4">
                {/* Headline, responsive font size, color transition on hover */}
                <h3 className="font-semibold text-[14px] sm:text-base md:text-lg lg:text-xl xl:text-2xl group-hover:text-primary transition-colors">
                    {data.headline}
                </h3>
                {/* Summary, hidden on mobile for compactness */}
                <p className="hidden sm:block text-base">{data.summary}</p>
                {/* Date, always shown, responsive font size */}
                <p className="mt-auto text-[12px] sm:text-base font-light">
                    {new Date(data.date).toLocaleDateString('en-us', { dateStyle: 'long' })}
                </p>
            </div>
        </Link>
    );
}