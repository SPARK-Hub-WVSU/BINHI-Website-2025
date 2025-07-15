import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

/*
      USAGE:

Default usage: 
  <CtaSection />


Custom usage:
  <CtaSection 
    title="Ready to start your innovation journey?"
    buttonText="Join BINHI Today"
    href="/apply"
  />

*/

export default function CtaSection({

  title = "Ready to launch your next startup?",
  buttonText = "Start your journey with BINHI",
  href = "https://docs.google.com/forms/d/e/1FAIpQLSdyuhC-r5rs5-lSEb7nc5Jv_ffg6j2VyOnaV__I8UnpL4S54w/viewform"

}) {
  return (
    <section className="py-10 md:py-15 lg:py-20
                           bg-white">
      <div className="max-w-5xl mx-auto px-5 md:px-10 text-center">

        {/* Title */}
        <h2 className="text-primary-dark font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5 md:mb-9 leading-tight">
          {title}
        </h2>

        {/* CTA Button */}
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark 
            text-white font-bold rounded-full 
            px-6 py-4 md:px-8 md:py-5
            text-base md:text-xl lg:text-2xl
            transition-all duration-200 hover:scale-105 hover:shadow-lg
            group"
        >
          {buttonText}
          <ArrowRightIcon className="ml-3 size-5 md:size-6 lg:size-7 stroke-2 text-white
            transition-transform duration-200 group-hover:translate-x-1" stroke="currentColor" />
        </Link>
      </div>
    </section>
  );
}