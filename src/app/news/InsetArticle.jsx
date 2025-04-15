"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import placeholderPhoto from '@/assets/placeholder-photo.png';
import Link from "next/link";

export default function InsetArticle({ id }) {
    // We fetch the data here
    const [ data, setData ] = useState({
        image: placeholderPhoto,
        headline: "BuzzEx: Sparking Innovation with Industry Breakthroughs",
        date: new Date(2024, 3, 14),
    });

    return (
        <Link className="group min-h-50 relative isolate overflow-hidden flex flex-col justify-end p-4 gap-2 after:content-[''] after:absolute after:inset-0 after:-z-[1] after:bg-linear-to-t after:from-black after:from-[-20%] after:to-transparent" href={`/article/${id}`} >
            <Image src={data.image} alt={data.headline} className="absolute inset-0 object-center object-contain -z-[2]" />
            <h2 className="text-white font-semibold text-xl group-hover:text-primary transition-colors">{data.headline}</h2>
            <p className="text-white text-base">{data.date.toLocaleDateString('en-us', { dateStyle: 'long' })}</p>
        </Link>
    );
}