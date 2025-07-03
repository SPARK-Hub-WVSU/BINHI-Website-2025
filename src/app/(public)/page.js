import Image from "next/image";

import LinkButton from "@/components/LinkButton";
import heroImage from '@/assets/hero.svg'

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




export default function Home() {


  return (


    <main>
      {/* ------------------- HERO -------------------*/}
      <section className="mt-10 md:mt-5 h-125 sm:h-150 md:h-175
        lg:h-screen xl:min-h-screen 
        bg-no-repeat bg-cover bg-center
        
        "
        style={{
          backgroundImage: `url(${heroImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >


        <div className=" pt-10 md:pt-20 lg:pt-35 pl-5 md:pl-25 lg:pl-42 w-fit ">
          <h1 className="max-w-153 mb-5 text-secondary font-bold
            text-3xl md:text-4xl lg:text-5xl
            md:leading-14 lg:leading-18 text-left">
            Nurturing Seeds of<br /> Ideas <span className="text-primary-dark">One Step <br />at a Time.</span>
          </h1>

          <LinkButton href="/">Incubate your startup with us</LinkButton>
        </div>
      </section>


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
      <section className="relative">

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

          <section className="h-fit pb-30 mx-5 sm:mx-10 md:mx-auto max-w-288 flex flex-wrap justify-center gap-3 sm:gap-5">
            {starterServices.map((service, index) => (
              <div key={index} className="bg-white starters-container 
                text-base md:text-lg lg:text-xl font-medium 
                w-36 sm:w-48 md:w-auto md:max-w-62 
                h-32 sm:h-48 md:h-73 
                rounded-xl sm:rounded-2xl md:rounded-3xl 
                p-2 sm:p-4 md:p-6 
                text-center flex flex-col items-center justify-center">

                {service.isHeroIcon ? (
                  <service.icon className="text-primary size-6 sm:size-8 md:size-12 lg:size-31 mb-2 sm:mb-4 md:mb-6" stroke="currentColor" />
                ) : (
                  <Image src={service.icon} className="mb-2 sm:mb-4 md:mb-6 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-31 lg:h-31" alt={service.alt} />
                )}

                <span className="leading-tight">{service.text}</span>
              </div>
            ))}
          </section>

        </div>

      </section>


      {/* -------------- IMPACT SECTION ---------------*/}
      <section className="-mt-15 sm:-mt-20 md:-mt-30 bg-white">

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
      w-32 h-32 sm:w-36 sm:h-40 md:w-44 md:h-48 lg:w-48 lg:h-52 xl:w-52 xl:h-60
      flex flex-col items-center justify-center">
                      <AcademicCapIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-primary mx-auto mb-1 sm:mb-2 md:mb-3" />
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary-dark mb-1">25</div>
                      <div className="text-xs sm:text-xs md:text-sm text-black font-medium leading-tight text-center">Startups Graduated</div>
                    </div>

                    {/* Jobs Generated */}
                    <div className="bg-secondary-lighter backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border-5 border-white shadow-md 
      w-32 h-32 sm:w-36 sm:h-40 md:w-44 md:h-48 lg:w-48 lg:h-52 xl:w-52 xl:h-60
      flex flex-col items-center justify-center">
                      <BriefcaseIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-primary mx-auto mb-1 sm:mb-2 md:mb-3" />
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary-dark mb-1">81</div>
                      <div className="text-xs sm:text-xs md:text-sm text-black font-medium leading-tight text-center">Jobs Generated with Startups</div>
                    </div>
                  </div>

                  {/* Bottom row - 3 cards in grid */}
                  <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 sm:gap-4 md:gap-6">
                    {/* Current Startup Incubatees */}
                    <div className="bg-secondary-lighter backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border-5 border-white shadow-md 
      w-32 h-32 sm:w-36 sm:h-40 md:w-44 md:h-48 lg:w-48 lg:h-52 xl:w-52 xl:h-60
      flex flex-col items-center justify-center">
                      <NewspaperIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-primary mx-auto mb-1 sm:mb-2 md:mb-3" />
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary-dark mb-1">13</div>
                      <div className="text-xs sm:text-xs md:text-sm text-black font-medium leading-tight text-center">Current Startup Incubatees</div>
                    </div>

                    {/* Investments Received */}
                    <div className="bg-secondary-lighter backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border-5 border-white shadow-md 
      w-32 h-32 sm:w-36 sm:h-40 md:w-44 md:h-48 lg:w-48 lg:h-52 xl:w-52 xl:h-60
      flex flex-col items-center justify-center">
                      <RocketLaunchIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-primary mx-auto mb-1 sm:mb-2 md:mb-3" />
                      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-primary-dark mb-1">3M+</div>
                      <div className="text-xs sm:text-xs md:text-sm text-black font-medium leading-tight text-center">Investments Received by Startups</div>
                    </div>

                    {/* Accumulated Revenue */}
                    <div className="bg-secondary-lighter backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center border-5 border-white shadow-md 
      w-32 h-32 sm:w-36 sm:h-40 md:w-44 md:h-48 lg:w-48 lg:h-52 xl:w-52 xl:h-60
      flex flex-col items-center justify-center">
                      <ChartBarIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-primary mx-auto mb-1 sm:mb-2 md:mb-3" />
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


    </main>

  );
}