'use client';

import {
    HeartIcon,
    GlobeAsiaAustraliaIcon,
    BeakerIcon,
    ComputerDesktopIcon,
} from '@heroicons/react/16/solid';
import Image from 'next/image';

import '@/styles/pages/about.css';

import bgWave from '@/assets/bg-wave-about-page.svg';
import Logo from '@/components/Logo';
import TimelineCard from './_components/TimelineCard';
import CTASection from '@/components/CTASection';
import LinkButton from '@/components/LinkButton';

import Introduction from './_data/Intro';
import Mission from './_data/Mission';
import Vision from './_data/Vision';

import timeline from './_data/timeline.js';
import tbiOfficials from './_data/officials';
import OfficerCard from './_components/OfficerCard';
import Mascot from '@/assets/mascot/Wave.webp'

export default function AboutPage() {
    return (
        <div className="py-14 gap-12 mx-auto grid justify-items-center binhi-about-container">
            <Logo scale={2} />
            <Introduction />

            {/* Mission, Vision, and Target Sectors */}
            <section className="mt-[1.5rem] md:mt-[3rem] grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16" id="mission-vision">
                <div className="flex flex-col gap-y-6">
                    <Mission />
                </div>
                <div className="flex flex-col gap-y-6 ">
                    <Vision />
                </div>

                <div className="flex flex-col gap-y-6">
                    <h2 className="text-2xl md:text-3xl">TARGET SECTORS</h2>
                    <ul className="gap-4 grid text-lg md:text-xl">
                        <li className="flex gap-3">
                            <HeartIcon className="size-8 fill-primary" />
                            Biomedical and Healthcare
                        </li>
                        <li className="flex gap-3">
                            <GlobeAsiaAustraliaIcon className="size-8 fill-primary" />
                            Agri-Aqua and Green Technologies
                        </li>
                        <li className="flex gap-3">
                            <BeakerIcon className="size-8 fill-primary" />
                            Herbal & Natural Products
                        </li>
                        <li className="flex gap-3">
                            <ComputerDesktopIcon className="size-8 fill-primary" />
                            Emerging Technologies / ICT
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-y-6 ">
                    <h2 className="text-2xl md:text-3xl">BINHI STARTUPS</h2>
                    <p className="text-lg md:text-xl lg:text-2xl">
                        Since its 2015 inauguration, BINHI has fostered the development of more than 20 startups within Iloilo.
                    </p>
                    <LinkButton 
                        href={"/startup-portfolio"}
                        children={"View Startup Portfolio"}
                        fullWidthOnMobile={true}
                        openInNewTab={false}>
                    </LinkButton>
                </div>
            </section>

            {/* Timeline */}
            <section
                id="timeline"
                className="!col-[screen] grid grid-cols-subgrid w-full bg-gray-100 relative isolate">
                <Image
                    className="!col-[screen] absolute w-full -z-10"
                    src={bgWave}
                    alt="background wave asset"
                    aria-hidden
                />
                <div className="!col-[content] py-32 flex flex-col items-center gap-16">
                    <h2 className="text-2xl md:text-4xl">TIMELINE</h2>
                    <div className="flex gap-8 binhi-timeline max-w-full overflow-x-auto">
                        {timeline.map(({ image, year, content }, key) => (
                            <TimelineCard
                                key={key}
                                image={image || Mascot}
                                year={year}
                                content={content}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* TBI Officials */}
            <section id="officials" className='flex flex-col items-center'>
                <h2 className='text-2xl md:text-4xl mb-[2rem]'>TBI OFFICIALS</h2>
                {tbiOfficials.map((hierarchy, key) => (
                    <div className="flex flex-col md:flex-row gap-10 md:gap-30 items-center my-6" key={`hierarchy-${key}`}>
                        {hierarchy.map(({ image, name, title }, key) => (
                            <OfficerCard
                                key={`officer-${key}`}
                                image={image || Mascot}
                                name={name}
                                title={title}
                            />
                        ))}
                    </div>
                ))}
            </section>

            <CTASection></CTASection>
        </div>
    );
}
