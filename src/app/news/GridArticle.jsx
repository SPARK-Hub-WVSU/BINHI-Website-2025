"use client";

import Image from "next/image";
import placeholderPhoto from '@/assets/placeholder-photo.png';
import Link from "next/link";

export default function GridArticle({ data }) {
    return (
        <Link className="group grid grid-cols-[1fr_3fr] gap-4 p-4 max-w-[860px] shadow-lg" href={`/article/${data.id}`} >
            <Image src={data.image || placeholderPhoto} alt={data.headline} className="aspect-[4/3] object-cover object-center" />
            <div className="flex flex-col">
                <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">{data.headline}</h3>
                <p className="text-base">{data.content.split('\n')?.[0] ?? ""}</p>
                <p className="mt-auto text-base">{new Date(data.date).toLocaleDateString('en-us', { dateStyle: 'long' })}</p>
            </div>
        </Link>
    );
}