"use client";

import Image from "next/image";

import placeholderPhoto from '@/assets/placeholder-photo.png';
import Link from "next/link";

export default function InsetArticle({ data }) {
    return (
        <Link className="group min-h-50 relative isolate overflow-hidden flex flex-col justify-end p-4 gap-2 after:content-[''] after:absolute after:inset-0 after:-z-[1] after:bg-linear-to-t after:from-black after:from-[-20%] after:to-transparent" href={`/article/${data.id}`} >
            <Image src={data.image || placeholderPhoto} alt={data.headline} className="absolute inset-0 object-center object-cover w-full h-full -z-[2]" />
            <h2 className="text-white font-semibold text-base sm:text-lg md:text-xl lg:text-2xl group-hover:text-primary transition-colors">{data.headline}</h2>
            <p className="text-white text-[14px] sm:text-base pb-4">{new Date(data.date).toLocaleDateString('en-us', { dateStyle: 'long' })}</p>
        </Link>
    );
}