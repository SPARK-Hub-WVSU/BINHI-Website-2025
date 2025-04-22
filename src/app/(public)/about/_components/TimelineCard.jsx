"use client";

import Image from "next/image";


export default function TimelineCard({ image, year, content }) {
    return (
        <div className="w-48 flex flex-col gap-4">
            <Image src={image} alt={`binhi-year-${year}`} width={953} height={634} />
            <h1 className="[writing-mode:vertical-rl] rotate-180 text-6xl font-black text-primary">{year}</h1>
            <p className="text-sm">{content}</p>
        </div>
    );
}