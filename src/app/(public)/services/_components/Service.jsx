import Image from "next/image";

export default function Service({icon, name, desc}) {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-4 items-center">
                <Image src={icon} className="size-[2rem]" alt="icon"/>
                <h2 className="text-2xl">{name}</h2>
            </div>
            <p className="text-2xl">{desc}</p>
        </div>
    );
}