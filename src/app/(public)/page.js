import Image from "next/image";

import LinkButton from "@/components/LinkButton";
import heroImage from '@/assets/hero.svg'

import { BeakerIcon, ComputerDesktopIcon, GlobeAsiaAustraliaIcon, HeartIcon } from '@heroicons/react/24/solid'
import { ScaleIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

import bgStartupStarters from '@/assets/startup-starters//bg-wave-startup-starters.svg'

import buildingBg from '@/assets/startup-starters/startup-starters.png'
import inHouse from '@/assets/startup-starters/in-house.svg'
import businessAssistance from '@/assets/startup-starters/business-assistance.svg'
import consultancySupport from '@/assets/startup-starters/consultancy-support.svg'
import fundingAssistance from '@/assets/startup-starters/funding-assistance.svg'
import monitoringCoaching from '@/assets/startup-starters/monitoring-coaching.svg'
import technologyForecasting from '@/assets/startup-starters/technology-forecasting.svg'
import laboratoryFacilities from '@/assets/startup-starters/laboratory-facilities.svg'
import meetingFacilities from '@/assets/startup-starters/meeting-facilities.svg'


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
            md:leading-14 lg:leading-18 ">
            Nurturing Seeds of<br /> Ideas <span className="text-primary-dark">One Step <br />at a Time.</span>
          </h1>

          <LinkButton href="/">Incubate your startup with us</LinkButton>
        </div>
      </section>


      {/* ------------------- MISSION  -------------------*/}
      <section className="relative ">
        <div className="w-full h-110 md:h-185 mission absolute -top-2 md:-top-5 z-0"></div>


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
            <h2 className="text-primary-dark font-bold text-3xl md:text-4xl text-center">
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
      <section className="relative bg-blue-300">

        <Image
          alt="Building Background Image"
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center"
          src={buildingBg.src}
          fill
        />

        {/* overlay with opacity */}
        <div className="absolute inset-0 bg-white/60" />

        {/* content - will be above the overlay */}
        <div className="relative z-10 h-353">

          <div className="h-94 absolute inset-0 bg-gradient-to-b from-white via-white to-transparent"
          />

          <h2 className="relative pt-55 z-10 max-w-187 font-bold text-2xl md:text-3xl lg:text-4xl 
            text-primary mx-auto text-center mb-12">
            We also provide these starters for your startup:
          </h2>

          <section className="mx-auto max-w-288 flex flex-wrap justify-center
            ">

            <div className="bg-white starters-container text-xl font-medium w-full max-w-62 h-73 m-5
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
              <Image src={inHouse} className="mb-6" alt="In-house and Virtual Incubation Icon" />
              <span >In-house and Virtual Incubation</span>
            </div>

            <div className="bg-white starters-container text-xl font-medium w-full max-w-62 h-73 m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
              <Image src={businessAssistance} className="mb-6" alt="Business and Professional Assistance Icon" />
              <span>Business and Professional Assistance</span>
            </div>

            <div className="bg-white starters-container text-xl font-medium w-full max-w-62 h-73 m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
              <Image src={consultancySupport} className="mb-6" alt="Consultancy and Support Services Icon" />
              <span>Consultancy and Support Services</span>
            </div>

            <div className="bg-white starters-container text-xl font-medium w-full max-w-62 h-73 m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
              <Image src={fundingAssistance} className="mb-6" alt="Funding and Grants Proposal Assistance Icon" />
              <span >Funding and Grants Proposal Assistance</span>
            </div>

            <div className="bg-white starters-container text-xl font-medium w-full max-w-62 h-73 m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
              <Image src={monitoringCoaching} className="mb-6" alt="Monitoring and Coaching Icon" />
              <span >Monitoring & Coaching</span>
            </div>

            <div className="bg-white starters-container text-xl font-medium w-full max-w-62 h-73 m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
              <Image src={technologyForecasting} className="mb-6" alt="Technology Forecasting and Matching Icon" />
              <span>Technology Forecasting and Matching</span>
            </div>

            <div className="bg-white starters-container text-xl font-medium w-full max-w-62 h-73 m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
              <Image src={laboratoryFacilities} className="mb-6" alt="Laboratory and Production Facilities Icon" />
              <span>Laboratory and Production Facilities</span>
            </div>

            <div className="bg-white starters-container text-xl font-medium w-full max-w-62 h-73 m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
              <Image src={meetingFacilities} className="mb-6" alt="Meeting and Conference Facilities Icon" />
              <span>Meeting and Conference Facilities</span>
            </div>

            <div className="bg-white starters-container text-xl font-medium w-full max-w-62 h-73 m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
              <ScaleIcon className="text-primary size-31 mb-6" stroke="currentColor" />
              <span>Branding and IP Protection</span>
            </div>

            <div className="bg-white starters-container text-xl font-medium w-full max-w-62 h-73 m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
              <AcademicCapIcon className="text-primary size-31 mb-6" stroke="currentColor" />
              <span>Trainings and Workshops</span>
            </div>

          </section>



        </div>
        <Image src={bgStartupStarters} alt="" className="w-full" />
      </section>
    </main>

  );
}