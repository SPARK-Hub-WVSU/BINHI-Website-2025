import incubatees from "./_data/incubatees";
import graduates from "./_data/graduates";
import spark from "@/assets/logo-spark.svg";
import fb from "@/assets/facebook-white-icon.svg";
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import Image from 'next/image';
import Link from 'next/link';



export default function StartupPortfolio() {
  return (
    <div className="flex flex-col items-center justify-center md:gap-12 gap-6 w-full max-w-screen md:py-10">
        {/* TITLE */}
        <section className="mt-[3rem] w-full max-w-[60rem] md:px-8 px-4">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl">Startup Portfolio</h1>
            <p className="mt-6 text-left text-lg md:text-lg lg:text-2xl">
                Since its 2015 inauguration, BINHI has fostered the development of more than 20 startups within Iloilo. Presented herein are each one of them as current incubatees and graduates.
            </p>
        </section>

        {/* CURRENT INCUBATEES */}
        {/* FIXING IT INTO A GRID IN THE FUTURE */}
        <section className="flex flex-col gap-6 md:gap-12 md:mt-[3rem] sm:pt-6 px-5 sm:p-2 w-full max-w-[75rem]">
            <h2 className="text-center text-2xl md:text-4xl">Current Incubatees</h2>
            <div className="flex flex-wrap justify-center gap-y-3 md:gap-y-6 md:gap-4 md:px-4 md:py-6">
            {Object.entries(incubatees).map(([name, logo], index) => (
                <div
                key={index}
                className="flex justify-center items-center w-[45%] aspect-[4/3] md:w-[20%] max-w-[13rem]"
                >
                    <Image
                        src={logo}
                        alt={name}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
            ))}
            </div>
        </section>


        {/* GRADUATED STARTUPS */}
        <section className="flex flex-col gap-6 md:gap-12 md:mt-[3rem] sm:pt-6 px-5 sm:p-2 w-full max-w-[75rem]">
            <h2 className="text-center text-2xl md:text-4xl">Graduated Incubatees</h2>
            <div className="flex flex-wrap justify-center gap-y-3 md:gap-y-6 gap-x-3 md:gap-x-2 md:gap-4 md:px-4 md:py-6">
            {Object.entries(graduates).map(([name, logo], index) => (
                <div
                key={index}
                className="flex justify-center items-center w-[45%] aspect-[4/3] md:w-[20%] max-w-[13rem]"
                >
                    <Image
                        src={logo}
                        alt={name}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
            ))}
            </div>
        </section>


        {/* SPARKHUB */}
        <section className="flex flex-col items-center gap-y-[2rem] md:gap-y-[5rem] md:mt-[3rem] w-full max-w-[60rem] px-8 sm:px-4">
            <h1 className="text-center text-2xl md:text-4xl">SPARK Hub Startup Community</h1>
            <Image alt="SPARK Hub Logo" src={spark} />
            <p className="md:mt-6 text-justify text-lg md:text-2xl">
                SPARK Hub is an aspiring student-led technopreneurship center at WVSU,
                where innovators, entrepreneurs, and creatives come together to create,
                collaborate, and empower-turning ideas into impactful solutions!
            </p>

            <div className="w-full flex flex-col md:flex-row md:justify-center md:items-center gap-6 md:gap-[8rem]">
                <Link href="https://www.facebook.com/WVSUSparkHub" className="bg-primary rounded-full p-2 gap-x-2 flex flex-row items-center self-start md:self-auto">
                    <Image alt="FB Logo" src={fb} />
                    <p className="text-base text-white md:text-2xl">
                        WVSU - SPARK Hub
                    </p>
                </Link>
                <Link href="mailto:spark.hub@wvsu.edu.ph" className="bg-primary rounded-full p-2 gap-x-2 flex flex-row items-center self-start md:self-auto">
                    <EnvelopeIcon className="text-background w-[40px] h-[40px]" />
                    <p className="text-base text-white md:text-2xl">
                        spark.hub@wvsu.edu.ph
                    </p>
                </Link>
            </div>
        </section>
    </div>
  );
}
