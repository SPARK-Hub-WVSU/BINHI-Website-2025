"use client";

import Image from "next/image";


export default function OfficerCard({ image, name, title }) {
    return (
        <div className="flex flex-col items-center">
            <Image src={image} alt={name} className="h-[250px] aspect-[3/4] object-contain object-top rounded-3xl object-cover mb-3" />
            <h3 className="font-bold text-center">{name}</h3>
            <p className="text-base text-center">{title}</p>
        </div>
    );
}