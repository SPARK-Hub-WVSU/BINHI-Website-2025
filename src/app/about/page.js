'use client';

import {
    HeartIcon,
    GlobeAsiaAustraliaIcon,
    BeakerIcon,
    ComputerDesktopIcon,
    ArrowRightIcon,
} from '@heroicons/react/16/solid';
import Image from 'next/image';

import '@/styles/pages/about.css';

import bgWave from '@/assets/bg-wave-about-page.svg';
import Logo from '@/components/Logo';
import TimelineCard from './_components/TimelineCard';

import Introduction from './_data/intro.mdx';
import Mission from './_data/mission.mdx';
import Vision from './_data/vision.mdx';

import timeline from './_data/timeline.json';
import tbiOfficials from './_data/officials';
import OfficerCard from './_components/OfficerCard';
import Link from 'next/link';
import Mascot from '@/assets/mascot/Wave.webp'

export default function AboutPage() {
    return (
        <div className="py-14 gap-12 mx-auto grid justify-items-center binhi-about-container">
            <Logo scale={2} />
            <Introduction />

            {/* Mission, Vision, and Target Sectors */}
            <section className="grid grid-cols-2 gap-16" id="mission-vision">
                <div className="flex flex-col gap-y-6">
                    <Mission />
                </div>
                <div className="flex flex-col gap-y-6 ">
                    <Vision />
                </div>

                <div className="col-span-2 grid justify-center gap-6">
                    <h2>TARGET SECTORS</h2>
                    <ul className="gap-4 grid">
                        <li className="flex gap-2">
                            <HeartIcon className="size-6 fill-primary" />
                            Biomedical and Healthcare
                        </li>
                        <li className="flex gap-2">
                            <GlobeAsiaAustraliaIcon className="size-6 fill-primary" />
                            Agri-Aqua and Green Technologies
                        </li>
                        <li className="flex gap-2">
                            <BeakerIcon className="size-6 fill-primary" />
                            Herbal & Natural Products
                        </li>
                        <li className="flex gap-2">
                            <ComputerDesktopIcon className="size-6 fill-primary" />
                            Emerging Technologies / ICT
                        </li>
                    </ul>
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
                    <h1>TIMELINE</h1>
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
                <h2 className='mb-4'>TBI OFFICIALS</h2>
                {tbiOfficials.map((hierarchy) => (
                    <div className="flex gap-6 items-center my-6">
                        {hierarchy.map(({ image, name, title }, key) => (
                            <OfficerCard
                                key={key}
                                image={image || Mascot}
                                name={name}
                                title={title}
                            />
                        ))}
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section className='flex flex-col items-center'>
                <h1>Ready to launch your next startup?</h1>
                <Link className="bg-primary text-background rounded-full px-4 py-2 flex items-center w-fit gap-2 mt-4" href="/">
                    <strong>Start your journey with BINHI</strong>
                    <ArrowRightIcon className="size-4 inline" />
                </Link>
            </section>
        </div>
    );
}
