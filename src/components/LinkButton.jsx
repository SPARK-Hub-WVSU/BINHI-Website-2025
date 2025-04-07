import Link from 'next/link';
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";



export default function LinkButton({ href, children }) {
    return (
        <Link
            href={href}
            className="
                w-fit h-fit py-4 px-6 flex-shrink-0 rounded-[50px] bg-accent
                text-white flex items-center justify-center text-2xl font-bold"
        >
            {children}
            <ArrowRight size={32} className='ml-4' />
        </Link>
    );
}
