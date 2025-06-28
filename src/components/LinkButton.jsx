import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';


export default function LinkButton({ href, children }) {
    return (
        <Link
            href={href}
            className="
                w-48 md:w-fit h-fit py-2 md:py-4 px-4 md:px-6 flex-shrink-0 rounded-3xl md:rounded-[3rem] bg-primary
                text-white flex items-center justify-center text-base md:text-xl font-bold"
        >
            {children}

            <ArrowRightIcon className="ml-3 size-6 text-white stroke-2" stroke="currentColor" />
        </Link>
    );
}
