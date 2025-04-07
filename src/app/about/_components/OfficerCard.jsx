"use client";

import Image from "next/image";


export default function OfficerCard({ image, name, title }) {
    return (
        <div className="flex flex-col items-center">
            <Image src={image} alt={name} className="h-[200px] aspect-[3/4] object-contain rounded-2xl mb-3" />
            <h3 className="font-bold">{name}</h3>
            <p className="text-xs">{title}</p>
        </div>
    );
}