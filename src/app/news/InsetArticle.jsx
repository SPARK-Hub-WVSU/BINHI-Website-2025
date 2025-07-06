"use client";

// InsetArticle component
// Renders a featured/top story article for the "Top Stories" section
// - Displays a background image, headline, and date
// - Uses a dark gradient overlay for text readability
// - Responsive headline and date styling
// - Uses a placeholder image if no image is provided

import Image from "next/image";
import placeholderPhoto from '@/assets/placeholder-photo.png';
import Link from "next/link";

export default function InsetArticle({ data, className = '' }) {
    return (
        // Article card as a clickable link, with overlay and text
        <Link
            className={`group ${className} relative isolate overflow-hidden flex flex-col justify-end p-4 gap-2
                        after:content-[''] after:absolute after:inset-0 after:-z-[1] after:bg-linear-to-t after:from-black after:from-[-20%] after:to-transparent`}
            href={`/article/${data.id}`}
        >
            {/* Background image (uses placeholder if missing) */}
            <Image
                src={data.image || placeholderPhoto}
                alt={data.headline}
                className="absolute inset-0 object-center object-cover w-full h-full -z-[2]"
            />
            {/* Headline, responsive font size, color transition on hover */}
            <h2 className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl group-hover:text-primary transition-colors">
                {data.headline}
            </h2>
            {/* Date, responsive font size */}
            <p className="text-white text-[14px] sm:text-base pb-4">
                {new Date(data.date).toLocaleDateString('en-us', { dateStyle: 'long' })}
            </p>
        </Link>
    );
}