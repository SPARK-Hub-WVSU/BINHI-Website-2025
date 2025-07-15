import Image from "next/image";

import LinkButton from "@/components/LinkButton";
import HeroBackground from "@/components/HeroBackground";
import CTASection from "@/components/CTASection";

import { BeakerIcon, ComputerDesktopIcon, GlobeAsiaAustraliaIcon, HeartIcon } from '@heroicons/react/24/solid'
import {
  ScaleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  NewspaperIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

import bgImpactWave from '@/assets/startup-starters/bg-impact-wave.svg'
import buildingBg from '@/assets/startup-starters/startup-starters.png'

import inHouse from '@/assets/startup-starters/in-house.svg'
import businessAssistance from '@/assets/startup-starters/business-assistance.svg'
import consultancySupport from '@/assets/startup-starters/consultancy-support.svg'
import fundingAssistance from '@/assets/startup-starters/funding-assistance.svg'
import monitoringCoaching from '@/assets/startup-starters/monitoring-coaching.svg'
import technologyForecasting from '@/assets/startup-starters/technology-forecasting.svg'
import laboratoryFacilities from '@/assets/startup-starters/laboratory-facilities.svg'
import meetingFacilities from '@/assets/startup-starters/meeting-facilities.svg'

import innovationPartners from './_data/innovationPartners';


const starterServices = [
  { icon: inHouse, text: "In-house and Virtual Incubation", alt: "In-house and Virtual Incubation Icon" },
  { icon: businessAssistance, text: "Business and Professional Assistance", alt: "Business and Professional Assistance Icon" },
  { icon: consultancySupport, text: "Consultancy and Support Services", alt: "Consultancy and Support Services Icon" },
  { icon: fundingAssistance, text: "Funding and Grants Proposal Assistance", alt: "Funding and Grants Proposal Assistance Icon" },
  { icon: monitoringCoaching, text: "Monitoring & Coaching", alt: "Monitoring and Coaching Icon" },
  { icon: technologyForecasting, text: "Technology Forecasting and Matching", alt: "Technology Forecasting and Matching Icon" },
  { icon: laboratoryFacilities, text: "Laboratory and Production Facilities", alt: "Laboratory and Production Facilities Icon" },
  { icon: meetingFacilities, text: "Meeting and Conference Facilities", alt: "Meeting and Conference Facilities Icon" },
  { icon: ScaleIcon, text: "Branding and IP Protection", alt: "Branding and IP Protection Icon", isHeroIcon: true },
  { icon: AcademicCapIcon, text: "Trainings and Workshops", alt: "Trainings and Workshops Icon", isHeroIcon: true }
];


import Villaruz from '@/assets/testimonials/president-wvsu.svg';
import Gabinete from '@/assets/testimonials/vp-wvsu.png';
import Aspera from '@/assets/testimonials/gm-binhi.png';
import Secondes from '@/assets/testimonials/director-kttbdc.png';




export default function Home() {


  return (


    <main>
      {/* ------------------- HERO -------------------*/}
      <HeroBackground>
        <div className="md:pt-20 lg:pt-25 md:pl-25 lg:pl-42 h-full flex flex-col justify-center md:justify-start">
          <div className="max-w-153 ">
            <h1 className="mb-5 text-secondary font-bold
              text-3xl md:text-4xl lg:text-5xl
              md:leading-14 lg:leading-18 text-center md:text-left">

              {/* Mobile version - each line in separate blocks */}
              <span className="block md:hidden">
                Nurturing Seeds of Ideas
                <br />
                <span className="text-primary-dark">One Step at a Time.</span>
              </span>

              {/* Desktop version - original layout */}
              <span className="hidden md:block">
                Nurturing Seeds of<br /> Ideas <span className="text-primary-dark">One Step <br />at a Time.</span>
              </span>
            </h1>

            <div className="flex justify-center md:justify-start">
              <LinkButton href="https://docs.google.com/forms/d/e/1FAIpQLSdyuhC-r5rs5-lSEb7nc5Jv_ffg6j2VyOnaV__I8UnpL4S54w/viewform" fullWidthOnMobile={true}>
                Incubate your startup with us
              </LinkButton>
            </div>
          </div>
        </div>
      </HeroBackground>


      {/* ------------------- MISSION  -------------------*/}
      <section className="relative bg-white">
        <div className="w-full h-100 md:h-185 mission absolute -top-2 md:-top-5 z-0"></div>


        <section className="relative z-10 h-fit mx-10
          flex flex-col justify-center items-center "
        >

          <div className="mt-10 md:mt-30 max-w-200">
            <h2 className="text-primary-dark font-bold text-2xl md:text-3xl lg:text-4xl text-center">
              Our Mission
            </h2>
            <p className="mt-4 text-center md:text-justify text-xl md:text-2xl">
              is to
              <span className="text-primary-dark font-semibold">
                &nbsp;empower innovation and economic growth by inspiring and nurturing technology-based startups
              </span>
              , fostering collaboration between academia, industry, and government, and advancing the commercialization of local technologies in the region.
            </p>
          </div>


          <div className="mt-20 md:mt-30 max-w-200 ">
            <h2 className="text-primary-dark font-bold text-2xl md:text-3xl lg:text-4xl text-center">
              We Envision
            </h2>
            <p className="mt-4 text-center md:text-justify text-xl md:text-2xl" >
              an ecosystem where
              <span className="text-primary-dark font-semibold">
                &nbsp;technology-based startups flourish, local innovations prosper, and collaboration propels regional economic growth
              </span>
              , establishing BINHI as a respected leader in enterprising innovations.
            </p>
          </div>


          <div className="max-w-200 mt-20 md:mt-30 lg:mt-40 flex flex-col justify-between items-center">
            <h2 className="text-primary-dark font-bold text-2xl md:text-3xl lg:text-4xl text-center">
              BINHI accepts and nurtures startups in four key sectors:
            </h2>

            <ul className="mt-8 md:mt-12">
              <li className="flex items-center text-xl md:text-2xl mb-5 md:mb-7">
                <HeartIcon className="text-primary-dark mr-5 md:mr-8 size-10" />
                Biomedical and Healthcare
              </li>
              <li className="flex items-center text-xl md:text-2xl mb-5 md:mb-7">
                <GlobeAsiaAustraliaIcon weight="fill" className="text-primary-dark mr-5 md:mr-8 size-10" />
                Agri-Aqua and Green Technologies
              </li>
              <li className="flex items-center text-xl md:text-2xl mb-5 md:mb-7">
                <ComputerDesktopIcon className="text-primary-dark mr-5 md:mr-8 size-10" />
                Emerging Technologies / ICT
              </li>
              <li className="flex items-center text-xl md:text-2xl ">
                <BeakerIcon className="text-primary-dark mr-5 md:mr-8 size-10" />
                Herbal & Natural Products
              </li>
            </ul>
          </div>
        </section >
      </section>


      {/* -------------- STARTUP STARTERS  ---------------*/}
      <section className="relative bg-white">

        <Image
          alt="Building Background Image"
          className="absolute inset-0 w-full h-full object-cover"
          src={buildingBg.src}
          fill
        />

        {/* content - will be above the overlay */}
        <div className="relative z-10 min-h-screen">

          <div className="h-50 md:h-70 lg:h-94 absolute inset-0 bg-gradient-to-b from-white via-white to-transparent"
          />

          <h2 className="relative pt-20 md:pt-30 lg:pt-55 z-10 max-w-187 font-bold text-2xl md:text-3xl lg:text-4xl 
            text-primary mx-10 md:mx-auto text-center mb-12">
            We also provide these starters for your startup:
          </h2>

          <section className="h-fit pb-30 flex flex-wrap mx-10 md:mx-auto max-w-250 justify-center gap-3 sm:gap-5">

            {starterServices.map((service, index) => (
              <div key={index} className="bg-white starters-container 
                  text-base md:text-lg  font-medium 
                  size-32 sm:w-36 sm:h-40 md:w-44 md:h-48 lg:w-48 lg:h-52 xl:w-52 xl:h-60
                  rounded-xl sm:rounded-2xl md:rounded-3xl 
                  p-2 sm:p-4 md:p-6 
                  text-center flex flex-col items-center justify-center">

                {service.isHeroIcon ? (
                  <service.icon className="text-primary size-6 sm:size-8 md:size-12 lg:size-22 mb-2 sm:mb-4 md:mb-6" stroke="currentColor" />
                ) : (
                  <Image src={service.icon} className="mb-2 sm:mb-4 md:mb-6 size-6 sm:size-8 md:size-12 lg:size-22" alt={service.alt} />
                )}

                <span className="leading-tight">{service.text}</span>
              </div>
            ))}
          </section>

        </div>

      </section>


      {/* -------------- IMPACT SECTION ---------------*/}
      <section className="-mt-15 sm:-mt-20 md:-mt-30 lg:-mt-35 bg-white">

        <div className="relative z-20 -mb-1">
          <Image src={bgImpactWave} alt="" className="w-full block" />
        </div>

        <div className="relative py-16 md:py-24 flex justify-center items-center">

          {/* Gradient overlay that sits on top */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-light to-secondary-light/0 z-0"></div>

          <div className="relative z-10 max-w-7xl w-full mx-auto px-5 md:px-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">

              {/* Left side - Text */}
              <div className="lg:w-1/3 mb-10 lg:mb-0 text-center lg:text-left w-full">
                <h2 className="text-primary font-bold text-2xl md:text-3xl lg:text-4xl leading-tight lg:leading-15 ">
                  To help you generate
                  <br />
                  <span className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-primary ">IMPACT</span>
                  <br />
                  for your business
                </h2>
              </div>

              {/* Right side - Stats */}
              <div className="lg:w-2/3 flex lg:pr-12 flex-col items-end">

                <div className="space-y-4 md:space-y-6">

                  {/* Top row - 2 centered cards */}
                  <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 ">
                    {/* Startups Graduated */}
                    <div className="bg-secondary-lighter backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border-5 border-white shadow-md 
                      size-32 sm:w-36 sm:h-40 md:w-44 md:h-48 lg:w-48 lg:h-52 xl:w-52 xl:h-60
                      flex flex-col items-center justify-center">
                      <AcademicCapIcon className="size-6 sm:size-7 md:size-8 lg:size-12 xl:size-16  text-primary mx-auto mb-1 sm:mb-2 md:mb-3" />
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary-dark mb-1">25</div>
                      <div className="text-xs sm:text-xs md:text-sm text-black font-medium leading-tight text-center">Startups Graduated</div>
                    </div>

                    {/* Jobs Generated */}
                    <div className="bg-secondary-lighter backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border-5 border-white shadow-md 
                      size-32 sm:w-36 sm:h-40 md:w-44 md:h-48 lg:w-48 lg:h-52 xl:w-52 xl:h-60
                      flex flex-col items-center justify-center">
                      <BriefcaseIcon className="size-6 sm:size-7 md:size-8 lg:size-12 xl:size-16 text-primary mx-auto mb-1 sm:mb-2 md:mb-3" />
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary-dark mb-1">81</div>
                      <div className="text-xs sm:text-xs md:text-sm text-black font-medium leading-tight text-center">Jobs Generated with Startups</div>
                    </div>
                  </div>

                  {/* Bottom row - 3 cards in grid */}
                  <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 sm:gap-4 md:gap-6">
                    {/* Current Startup Incubatees */}
                    <div className="bg-secondary-lighter backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border-5 border-white shadow-md 
                      size-32 sm:w-36 sm:h-40 md:w-44 md:h-48 lg:w-48 lg:h-52 xl:w-52 xl:h-60
                      flex flex-col items-center justify-center">
                      <NewspaperIcon className="size-6 sm:size-7 md:size-8 lg:size-12 xl:size-16 text-primary mx-auto mb-1 sm:mb-2 md:mb-3" />
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary-dark mb-1">13</div>
                      <div className="text-xs sm:text-xs md:text-sm text-black font-medium leading-tight text-center">Current Startup Incubatees</div>
                    </div>

                    {/* Investments Received */}
                    <div className="bg-secondary-lighter backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border-5 border-white shadow-md 
                      size-32 sm:w-36 sm:h-40 md:w-44 md:h-48 lg:w-48 lg:h-52 xl:w-52 xl:h-60
                      flex flex-col items-center justify-center">
                      <RocketLaunchIcon className="size-6 sm:size-7 md:size-8 lg:size-12 xl:size-16 text-primary mx-auto mb-1 sm:mb-2 md:mb-3" />
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary-dark mb-1">3M+</div>
                      <div className="text-xs sm:text-xs md:text-sm text-black font-medium leading-tight text-center">Investments Received by Startups</div>
                    </div>

                    {/* Accumulated Revenue */}
                    <div className="bg-secondary-lighter backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border-5 border-white shadow-md 
                      size-32 sm:w-36 sm:h-40 md:w-44 md:h-48 lg:w-48 lg:h-52 xl:w-52 xl:h-60
                      flex flex-col items-center justify-center">
                      <ChartBarIcon className="size-6 sm:size-7 md:size-8 lg:size-12 xl:size-16 text-primary mx-auto mb-1 sm:mb-2 md:mb-3" />
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary-dark mb-1">5M+</div>
                      <div className="text-xs sm:text-xs md:text-sm text-black font-medium leading-tight text-center">Accumulated Startup Revenues</div>
                    </div>
                  </div>

                </div>

                <p className="text-sm text-gray-600 mt-6 text-center lg:text-right italic">
                  *Key Performance Metrics of BINHI as of March 2025
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* -------------- INNOVATION PARTNERS SECTION ---------------*/}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">

          {/* Title and Subtitle */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-2">
              Our innovation partners
            </h2>
            <p className="text-primary text-xl md:text-2xl lg:text-3xl font-semibold">
              will support you on your journey
            </p>
          </div>


          {/* Partners Grid */}
          <div className="max-w-6xl mx-auto flex flex-col flex-wrap justify-center items-center ">

            {/* Row 1 - 5 logos */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center mb-4 md:mb-8">
              {innovationPartners.slice(0, 5).map((partner, index) => (
                <div key={index} className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 
                flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-200"
                    width={112}
                    height={112}
                  />
                </div>
              ))}
            </div>

            {/* Row 2 - 5 logos */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-14 items-center mb-4 md:mb-8">
              {innovationPartners.slice(5, 10).map((partner, index) => (
                <div key={index + 5} className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 
                flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-200"
                    width={112}
                    height={112}
                  />
                </div>
              ))}
            </div>

            {/* Row 3 - 5 logos */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-7 lg:gap-9 items-center mb-4 md:mb-8">
              {innovationPartners.slice(10, 15).map((partner, index) => (
                <div key={index + 10} className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 
                flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-200"
                    width={112}
                    height={112}
                  />
                </div>
              ))}
            </div>

            {/* Row 4 - 3 logos */}
            <div className="flex flex-wrap justify-center gap-4 sm-gap:6 md:gap-8 lg:gap-10 items-center ">
              {innovationPartners.slice(15, 18).map((partner, index) => (
                <div key={index + 15} className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28
                flex items-center justify-center">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-200"
                    width={112}
                    height={112}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* -------------- TESTIMONIALS SECTION ---------------*/}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-10">

          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-primary font-bold text-2xl md:text-3xl lg:text-4xl">
              Hear the testimonials from our
              <br />
              university officials
            </h2>
          </div>

          {/* Testimonials */}
          <div className="space-y-12 md:space-y-16">

            {/* First Testimonial - President */}
            <div className="flex flex-col md:flex-row items-center text-center md:text-left md:items-start gap-8 md:gap-12">
              {/* Quote */}
              <div className="flex-1 md:w-7/10 order-2 md:order-1">
                <blockquote className="text-lg md:text-xl lg:text-3xl text-gray-900 mb-4 font-semibold leading-relaxed">
                  &ldquo;As President, I take pride in the collaborative community within BINHI, where visionaries, experts, and mentors converge to create an inspiring environment.&rdquo;
                </blockquote>
                <p className="text-sm md:text-base text-gray-600 italic mb-4">
                  &ldquo;BINHI&apos;s dedication to bridging academia and industry ensures that WVSU&apos;s technological advancements have a tangible impact not only within our academic community but also on a global scale.&rdquo;
                </p>
                <div className="text-sm md:text-base font-semibold text-gray-800">
                  JOSELITO F. VILLARUZ, M.D., Ph.D., FPPS
                </div>
                <div className="text-sm text-gray-600">
                  President, WVSU
                </div>
              </div>

              {/* Profile Image */}
              <div className="order-1 md:order-2 md:w-3/10 flex justify-center">
                <div className="size-48 md:size-56 lg:size-72 xl:size-80 rounded-full border-4 border-primary overflow-hidden">
                  <Image
                    src={Villaruz}
                    alt="JOSELITO F. VILLARUZ, M.D., Ph.D., FPPS - President, WVSU"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Second Row - Two Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

              {/* Left Testimonial - VP Research */}
              <div className="flex flex-col items-center text-center">
                <div className="size-32 md:side-40 lg:size-48 rounded-full border-4 border-primary mb-6 overflow-hidden">
                  <Image
                    src={Gabinete}
                    alt="GRETA G. GABINETE, Ph.D. - Vice President for Research, Innovation, and Extension, WVSU"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <blockquote className="text-base font-semibold md:text-lg text-gray-800 mb-4 leading-relaxed">
                  &ldquo;As the Vice President of Research, Innovation, and Extension, I am thrilled to witness the positive impact BINHI has had on our university&apos;s ecosystem and the broader community.&rdquo;
                </blockquote>
                <p className="text-sm md:text-base text-gray-600 italic mb-4">
                  &ldquo;Our commitment to research, innovation, and extension remains unwavering, and BINHI will continue to be a driving force behind the next wave of technological advancements and entrepreneurial success stories.&rdquo;
                </p>
                <div className="text-sm md:text-base font-semibold text-gray-800">
                  GRETA G. GABINETE, Ph.D.
                </div>
                <div className="text-sm text-gray-600">
                  Vice President for Research,
                  <br />
                  Innovation, and Extension, WVSU
                </div>
              </div>

              {/* Right Testimonial - General Manager */}
              <div className="flex flex-col items-center text-center">
                <div className="size-32 md:side-40 lg:size-48 rounded-full border-4 border-primary mb-6 overflow-hidden">
                  <Image
                    src={Aspera}
                    alt="TED HYACINTH ASPERA - BINHI General Manager, WVSU"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <blockquote className="text-base font-semibold md:text-lg text-gray-800 mb-4 leading-relaxed">
                  &ldquo;As Iloilo rises as the 5th emerging startup innovation hub in the Philippines, our mission is to search and nurture quality startups that generate jobs, address social challenges, and contribute meaningfully to the economy.&rdquo;
                </blockquote>
                <p className="text-sm md:text-base text-gray-600 italic mb-4">
                  &ldquo;BINHI aims to be one of the leading world-class innovation hubs. Through our program, we are planting the seeds of innovation today—transforming local ideas into global solutions and turning dreamers into founders.&rdquo;
                </p>
                <div className="text-sm md:text-base font-semibold text-gray-800">
                  TED HYACINTH ASPERA
                </div>
                <div className="text-sm text-gray-600">
                  BINHI General Manager, WVSU
                </div>
              </div>
            </div>

            {/* Last Testimonial - Director */}
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <div className="size-32 md:side-40 lg:size-48 rounded-full border-4 border-primary mb-6 overflow-hidden">
                <Image
                  src={Secondes}
                  alt="ARNEL N. SECONDES, Ph.D. - KTTBDC Director, WVSU"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote className="text-base font-semibold md:text-lg text-gray-800 mb-4 leading-relaxed">
                &ldquo;At BINHI TBI, we nurture innovation by providing essential incubation services to entrepreneurs, startups, researchers, and innovators.&rdquo;
              </blockquote>
              <p className="text-sm md:text-base text-gray-600 italic mb-4">
                &ldquo;By leveraging the university&apos;s resources and strategic partnerships, we offer mentoring, networking, and practical support to help transform ideas into successful businesses. Explore how BINHI TBI can support your entrepreneurial journey. Together, let&apos;s cultivate innovation and create lasting impact.&rdquo;
              </p>
              <div className="text-sm md:text-base font-semibold text-gray-800">
                ARNEL N. SECONDES, Ph.D.
              </div>
              <div className="text-sm text-gray-600">
                KTTBDC Director, WVSU
              </div>
            </div>

          </div>
        </div>
      </section>


      <CTASection />

    </main>

  );
}