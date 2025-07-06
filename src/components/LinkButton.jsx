import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function LinkButton({ href, children, fullWidthOnMobile = false }) {
    const baseClasses = "h-fit py-3 md:py-4 px-6 md:px-6 flex-shrink-0 rounded-3xl md:rounded-[3rem] bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold transition-all duration-200 hover:bg-primary-dark";

    const widthClasses = fullWidthOnMobile
        ? "w-full max-w-85 md:max-w-full md:w-fit"
        : "w-48 md:w-fit";

    return (
        <Link
            href={href}
            className={`${baseClasses} ${widthClasses}`}
        >
            {children}
            <ArrowRightIcon className="ml-3 size-6 text-white stroke-2" stroke="currentColor" />
        </Link>
    );
}