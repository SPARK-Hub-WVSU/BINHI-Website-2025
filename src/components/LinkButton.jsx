import Link from 'next/link';
import Image from 'next/image';
import ArrowRight from '@/assets/arrow-right.svg';


export default function LinkButton({ href, children }) {
    return (
        <Link
            href={href}
            className="
                w-fit h-fit py-4 px-6 flex-shrink-0 rounded-[50px] bg-primary
                text-white flex items-center justify-center text-2xl font-bold"
        >
            {children}
            <Image src={ArrowRight} className="ml-4 w-[24px]" alt='Arrow Right' />
        </Link>
    );
}
