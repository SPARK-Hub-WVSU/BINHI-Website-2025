"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import placeholderPhoto from '@/assets/placeholder-photo.png';
import Link from "next/link";

export default function GridArticle({ id }) {
    // We fetch the data here
    const [ data, setData ] = useState({
        image: placeholderPhoto,
        headline: "BuzzEx: Sparking Innovation with Industry Breakthroughs",
        content: "Lorem ipsum deloreum Lorem ipsum deloreum Lorem ipsum deloreum Lorem ipsum deloreum (headline).",
        date: new Date(2024, 3, 14),
    });

    return (
        <Link className="group grid grid-cols-[1fr_3fr] gap-4 p-4 max-w-[860px] shadow-lg" href={`/article/${id}`} >
            <Image src={data.image} alt={data.headline} className="aspect-[4/3] object-cover object-center" />
            <div className="flex flex-col">
                <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">{data.headline}</h3>
                <p className="text-base">{data.content.split('\n')?.[0] ?? ""}</p>
                <p className="mt-auto text-base">{data.date.toLocaleDateString('en-us', { dateStyle: 'long' })}</p>
            </div>
        </Link>
    );
}