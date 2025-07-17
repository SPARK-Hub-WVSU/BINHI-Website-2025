import Service from "./_components/Service";
import servicesData from "./_data/servicesData";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import CtaSection from "@/components/CTASection";

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 sm:gap-6 py-10 sm:py-5 w-full max-w-screen">

        {/* TITLE */}
        <section id="services-list" className="flex flex-col items-center">
            <div className="mt-[3rem] w-full max-w-[65rem] md:px-8 px-4">
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl">Services</h1>
                <p className="mt-6 text-center text-lg md:text-lg lg:text-2xl">Startup incubatees at BINHI are entitled to the following services:</p>
            </div>

            <div className="max-w-[78rem] p-[2.5rem] flex flex-col lg:flex-row gap-y-5 lg:gap-x-20 justify-center">
                <ul className="max-w-[33rem] flex flex-col gap-y-5">
                    {
                        servicesData[0].map((service, index) => (
                            <li key={index}>
                            <Service
                                key={index}
                                icon={service.icon}
                                name={service.name}
                                desc={service.desc}
                            />
                            </li>
                        ))
                    }
                </ul>

                <ul className=" max-w-[33rem] flex flex-col gap-y-5">
                    {
                        servicesData[1].map((service, index) => (
                            <li key={index}>
                                <Service
                                key={index}
                                icon={service.icon}
                                name={service.name}
                                desc={service.desc}
                            />
                            </li>
                        ))  
                    }
                </ul>
            </div>
        </section>
        
        <CtaSection></CtaSection>
    </div>
  );
}
