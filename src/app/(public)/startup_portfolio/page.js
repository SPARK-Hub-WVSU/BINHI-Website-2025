import incubatees from "./_data/incubatees";
import graduates from "./_data/graduates";
import spark from "@/assets/logo-spark.svg";
import fb from "@/assets/facebook-white-icon.svg";
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import Image from 'next/image';



export default function StartupPortfolio() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 sm:gap-6 w-full max-w-screen py-10 sm:py-5">
        {/* TITLE */}
        <section className="mt-[6rem] w-full max-w-[60rem] px-8 sm:px-4">
            <h1 className="text-center">Startup Portfolio</h1>
            <p className="mt-6 text-justify">
                Since its 2015 inauguration, BINHI has fostered the development of more than 20 startups within Iloilo. Presented herein are each one of them as current incubatees and graduates.
            </p>
        </section>

        {/* CURRENT INCUBATEES */}
        {/* FIXING IT INTO A GRID IN THE FUTURE */}
        <section className="flex flex-col gap-12 mt-[5rem] sm:pt-6 px-5 sm:p-2 w-full max-w-[75rem]">
            <h2 className="text-center">Current Incubatees</h2>
            <div className="flex flex-wrap items-center justify-center gap-y-10 gap-x-20">
                {Object.entries(incubatees).map(([name, logo], index) => (
                <Image
                    key={index}
                    src={logo}
                    alt={name}
                    className="max-h-48 max-w-[15rem]"
                />
                ))}
            </div>
        </section>


        {/* GRADUATED STARTUPS */}
        <section className="flex flex-col gap-12 mt-[5rem] sm:pt-6 px-5 sm:p-2 w-full max-w-[75rem]">
            <h2 className="text-center">Graduated Startups</h2>
            <div className="px-5 sm:px-2 flex flex-wrap items-center justify-center gap-4">
                {
                Object.entries(graduates).map(([name, logo], index) => (
                    <div key={index} className="max-h-48 max-w-[15rem] flex items-center justify-center gap-4">
                    <Image src={logo} alt={name} className="h-full w-auto" />
                    </div>
                ))
                }
            </div>
        </section>


        {/* SPARKHUB */}
        <section className="flex flex-col items-center gap-y-[5rem] mt-[5rem] w-full max-w-[60rem] px-8 sm:px-4">
            <h1 className="text-center">Student Start-up Organization</h1>
            <Image alt="SPARK Hub Logo" src={spark} />
            <p className="mt-6 text-justify">
                SPARK Hub is an aspiring student-led technopreneurship center at WVSU,
                where innovators, entrepreneurs, and creatives come together to Create,
                Collaborate, and Empower-turning ideas into impactful solutions!
            </p>

            <div className="w-full flex flex-col md:flex-row md:justify-center md:items-center gap-6 md:gap-[8rem]">
                <button type="button" className="bg-primary rounded-full p-2 gap-x-2 flex flex-row items-center self-start md:self-auto">
                    <Image alt="FB Logo" src={fb} />
                    <p className="text-base text-white">
                        spark.hub@wvsu.edu.ph
                    </p>
                </button>
                <button type="button" className="bg-primary rounded-full p-2 gap-x-2 flex flex-row items-center self-start md:self-auto">
                    <EnvelopeIcon className="text-background w-[40px] h-[40px]" />
                    <p className="text-base text-white">
                        WVSU - SPARK Hub
                    </p>
                </button>
            </div>
        </section>
    </div>
  );
}
