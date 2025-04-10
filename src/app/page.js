import Image from "next/image";

import Header from "./Header";
import Footer from "./Footer";

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
    <>
      <div className="">

        <Header />

        {/* ------------------- HERO -------------------*/}
        <section className="mt-5 min-h-screen bg-no-repeat bg-cover bg-center
        
        "
          style={{ backgroundImage: `url(${heroImage.src})`, backgroundSize: '105% auto' }}
        >


          <div className=" pt-[140px]  pl-[170px] w-fit ">
            <h1 className="w-[615px]  mb-5 
            text-secondary text-[50px] font-bold leading-[75px] ">
              Nurturing Seeds of<br /> Ideas <span className="text-primary-dark">One Step <br />at a Time.</span>
            </h1>

            <LinkButton href="/">Incubate your startup with us</LinkButton>
          </div>
        </section>


        {/* ------------------- MISSION  -------------------*/}
        <section className="relative">
          <div className="w-full h-[744px] mission absolute -top-5 z-0"></div>


          <section className="relative z-10 h-fit flex flex-col justify-center items-center"

          >

            <div className="mt-[150px] max-w-[789px]">
              <h2 className="text-primary-dark font-bold text-5xl text-center">
                Our Mission
              </h2>
              <p className="mt-[17px] text-justify text-2xl">
                is to
                <span className="text-primary-dark font-semibold">
                  &nbsp;empower innovation and economic growth by inspiring and nurturing technology-based startups
                </span>
                , fostering collaboration between academia, industry, and government, and advancing the commercialization of local technologies in the region.
              </p>

            </div>


            <div className="mt-[90px] max-w-[789px] ">
              <h2 className="text-primary-dark font-bold text-5xl text-center">
                We Envision
              </h2>
              <p className="mt-[17px] text-justify text-2xl" >
                an ecosystem where
                <span className="text-primary-dark font-semibold">
                  &nbsp;technology-based startups flourish, local innovations prosper, and collaboration propels regional economic growth
                </span>
                , establishing BINHI as a respected leader in enterprising innovations.
              </p>
            </div>


            <div className="max-w-[740px] mt-[150px]">
              <h2 className="text-primary-dark font-bold text-5xl text-center">
                BINHI accepts and nurtures startups in four key sectors:
              </h2>

              <ul className="ml-[100px] mt-[50px]">
                <li className="flex items-center text-[32px] mb-[30px]">
                  <HeartIcon className="text-primary-dark mr-[34px] w-[40px] h-[40px]" />
                  Biomedical and Healthcare
                </li>
                <li className="flex items-center text-[32px] mb-[30px]">
                  <GlobeAsiaAustraliaIcon weight="fill" className="text-primary-dark mr-[34px] w-[40px] h-[40px]" />
                  Agri-Aqua and Green Technologies
                </li>
                <li className="flex items-center text-[32px] mb-[30px]">
                  <ComputerDesktopIcon className="text-primary-dark mr-[34px] w-[40px] h-[40px]" />
                  Emerging Technologies / ICT
                </li>
                <li className="flex items-center text-[32px] ">
                  <BeakerIcon className="text-primary-dark mr-[34px] w-[40px] h-[40px]" />
                  Herbal & Natural Products
                </li>
              </ul>
            </div>
          </section >
        </section>


        {/* -------------- STARTUP STARTERS  ---------------*/}
        <section className="relative bg-blue-300">

          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${buildingBg.src})` }}
          />

          {/* overlay with opacity */}
          <div className="absolute inset-0 bg-white/60" />

          {/* content - will be above the overlay */}
          <div className="relative z-10 h-[1411px]">

            <div className="h-[376px] absolute inset-0 bg-gradient-to-b from-white via-white to-transparent"
              style={{
                background: 'linear-gradient(180deg, #FFF 70.94%, rgba(255, 255, 255, 0.00) 100%)'
              }}
            />

            <h2 className="relative pt-[220px] z-10 max-w-[749px] font-bold text-5xl text-primary mx-auto text-center
            mb-12">
              We also provide these starters for your startup:
            </h2>

            <section className="mx-auto max-w-[1149px] flex flex-wrap justify-center
            ">

              <div className="bg-white starters-container text-xl font-medium w-full max-w-[247px] h-[291px] m-5
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
                <Image src={inHouse} className="mb-6" alt="In-house and Virtual Incubation Icon" />
                <span >In-house and Virtual Incubation</span>
              </div>

              <div className="bg-white starters-container text-xl font-medium w-full max-w-[247px] h-[291px] m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
                <Image src={businessAssistance} className="mb-6" alt="Business and Professional Assistance Icon" />
                <span>Business and Professional Assistance</span>
              </div>

              <div className="bg-white starters-container text-xl font-medium w-full max-w-[247px] h-[291px] m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
                <Image src={consultancySupport} className="mb-6" alt="Consultancy and Support Services Icon" />
                <span>Consultancy and Support Services</span>
              </div>

              <div className="bg-white starters-container text-xl font-medium w-full max-w-[247px] h-[291px] m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
                <Image src={fundingAssistance} className="mb-6" alt="Funding and Grants Proposal Assistance Icon" />
                <span >Funding and Grants Proposal Assistance</span>
              </div>

              <div className="bg-white starters-container text-xl font-medium w-full max-w-[247px] h-[291px] m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
                <Image src={monitoringCoaching} className="mb-6" alt="Monitoring and Coaching Icon" />
                <span >Monitoring & Coaching</span>
              </div>

              <div className="bg-white starters-container text-xl font-medium w-full max-w-[247px] h-[291px] m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
                <Image src={technologyForecasting} className="mb-6" alt="Technology Forecasting and Matching Icon" />
                <span>Technology Forecasting and Matching</span>
              </div>

              <div className="bg-white starters-container text-xl font-medium w-full max-w-[247px] h-[291px] m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
                <Image src={laboratoryFacilities} className="mb-6" alt="Laboratory and Production Facilities Icon" />
                <span>Laboratory and Production Facilities</span>
              </div>

              <div className="bg-white starters-container text-xl font-medium w-full max-w-[247px] h-[291px] m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
                <Image src={meetingFacilities} className="mb-6" alt="Meeting and Conference Facilities Icon" />
                <span>Meeting and Conference Facilities</span>
              </div>

              <div className="bg-white starters-container text-xl font-medium w-full max-w-[247px] h-[291px] m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
                <ScaleIcon className="text-primary w-[125px] h-[125px] mb-6" stroke="currentColor" />
                <span>Branding and IP Protection</span>
              </div>

              <div className="bg-white starters-container text-xl font-medium w-full max-w-[247px] h-[291px] m-5 
              rounded-3xl py-8 px-4 text-center flex flex-col items-center">
                <AcademicCapIcon className="text-primary w-[125px] h-[125px] mb-6" stroke="currentColor" />
                <span>Trainings and Workshops</span>
              </div>

            </section>



          </div>
          <Image src={bgStartupStarters} alt="" className="w-full" />
        </section>

        {/* 
            git stash and git stash pop are used to temporarily save and restore uncommitted changes:

            git stash 
            git stash pop
            
            */}

        <Footer />
      </div >

    </>
  );
}
