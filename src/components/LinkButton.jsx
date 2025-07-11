import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

/*
  @param {string} props.href
  The URL or path to navigate to
  
  @param {React.ReactNode} props.children
  The button text/content to display
  
  @param {boolean} [props.fullWidthOnMobile=false]
  If true, button takes full width on mobile devices with max-width constraints
  
  @param {boolean} [props.openInNewTab=true]
  If true, opens link in new tab with security attributes
 

   Default usage: 
 <LinkButton href="https://external-site.com">External Link</LinkButton>
  
 
   Full width on mobile, opens in same tab:
 <LinkButton href="/about" fullWidthOnMobile={true} openInNewTab={false}>
    About Us
  </LinkButton>

  */

  
export default function LinkButton({
    href,
    children,
    fullWidthOnMobile = false,
    openInNewTab = true
}) {
    const baseClasses = "h-fit py-3 md:py-4 px-6 md:px-6 flex-shrink-0 rounded-3xl md:rounded-[3rem] bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold transition-all duration-200 hover:bg-primary-dark hover:scale-105 hover:shadow-lg group";

    const widthClasses = fullWidthOnMobile
        ? "w-full max-w-85 md:max-w-full md:w-fit"
        : "w-48 md:w-fit";

    const linkProps = openInNewTab
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

    return (
        <Link
            href={href}
            {...linkProps}
            className={`${baseClasses} ${widthClasses}`}
        >
            {children}
            <ArrowRightIcon className="ml-3 size-6 text-white stroke-2
            transition-transform duration-200 group-hover:translate-x-1" stroke="currentColor" />
        </Link>
    );
}