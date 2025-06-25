import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/solid';


export default function LinkButton({ href, children }) {
    return (
        <Link
            href={href}
            className="
                w-fit h-fit py-4 px-6 flex-shrink-0 rounded-[50px] bg-primary
                text-white flex items-center justify-center text-2xl font-bold"
        >
            {children}

            <ArrowRightIcon className="ml-[22px] w-[24px] h-[24px] text-white stroke-[2px]" stroke="currentColor" />
        </Link>
    );
}
