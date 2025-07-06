import Image from 'next/image'
import heroDesktop from '@/assets/hero.svg'
import heroMobile from '@/assets/mobile-hero.svg'

export default function HeroBackground({ children }) {
  return (
    <section className="mt-10 md:mt-5">
      {/* Mobile Layout - Image above content */}
      <div className="block md:hidden">
        {/* Mobile content with padding */}
        <div className="pt-10 px-5 pb-8">
          {children}
        </div>

        {/* Mobile hero image below content */}
        <div className="w-full h-100 sm:h-130 relative -mb-15 ">
          <Image
            src={heroMobile}
            alt="BINHI Hero Background Mobile"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Desktop Layout - Background with overlay content */}
      <div className="hidden md:block h-175 lg:h-screen xl:min-h-screen relative">
        <Image
          src={heroDesktop}
          alt="BINHI Hero Background Desktop"
          fill
          className="object-cover"
          priority
        />

        {/* Desktop content overlay */}
        <div className="relative z-10 h-full">
          {children}
        </div>
      </div>
    </section>
  )
}