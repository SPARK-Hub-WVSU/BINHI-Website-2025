import Image from "next/image";

export default function Service({ icon, name, desc }) {
    return (
        <div className="lg:min-h-36 max-w-[30rem] flex flex-col gap-y-2">
            <div className="flex flex-row gap-x-4 items-center">
                <Image src={icon} className="size-[2rem]" alt={`${name} icon`} />
                <h2 className="text-lg lg:text-xl font-semibold">{name}</h2>
            </div>
            <p className="text-lg lg:text-xl text-left">{desc}</p>
        </div>
    );
}