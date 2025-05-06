import Service from "./_components/Service";
import servicesData from "./_data/servicesData";
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 sm:gap-6 py-10 sm:py-5">

        {/* TITLE */}
        <section id="services-list">
            <div className="max-w-[60rem] px-8 sm:px-4">
                <h1 className="text-center">Services</h1>
                <p className="mt-6 text-center">Startup incubatees at BINHI are entitled to the following services:</p>
            </div>

            <div className="p-[2.5rem] flex flex-col lg:flex-row gap-x-5">
                <ul className="max-w-[33rem] flex flex-col gap-y-5">
                    {
                        servicesData[0].map((service, index) => (
                            <Service
                                key={index}
                                icon={service.icon}
                                name={service.name}
                                desc={service.desc}
                            />
                        ))
                    }
                </ul>

                <ul className="max-w-[33rem] flex flex-col gap-y-5">
                    {
                        servicesData[1].map((service, index) => (
                            <Service
                                key={index}
                                icon={service.icon}
                                name={service.name}
                                desc={service.desc}
                            />
                        ))  
                    }
                </ul>
            </div>
        </section>


        <section className="p-[2.5rem] flex flex-col items-center gap-y-5">
            <h1>Ready to launch your next startup?</h1>
            <button className="bg-primary w-[26rem] p-2.5 px-[1.5rem] rounded-full items-center flex flex-row justify-between gap-x-3">
                <p className="text-white font-bold">Start your journey with us!</p>
                <ArrowRightIcon className="size-[1.5rem] text-white" />
            </button>

        </section>
    </div>
  );
}
