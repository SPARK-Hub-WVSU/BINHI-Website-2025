import Image from "next/image"
import Link from 'next/link'
import Logo from "@/components/Logo"
import bgWave from '@/assets/bg-wave-footer.svg'
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import FacebookIcon from '@/assets/facebook-icon.svg'

export default function Footer() {
    return (
        <footer className="text-white">

            <Image src={bgWave} className="w-full block -mb-1" alt="Wave Footer Background" />

            <div className="bg-secondary w-full min-h-75 
                flex flex-col lg:flex-row px-5 sm:px-10 md:px-20 lg:px-35 py-8 lg:py-0 lg:items-center
            ">
                {/* Logo Section */}
                <div className="w-fit h-fit mb-8 lg:mb-0 flex justify-center lg:justify-start">
                    <Logo version={2}></Logo>
                </div>

                <section className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center lg:px-10 lg:h-44">

                    {/* Contact Info */}
                    <div className="flex flex-col lg:justify-between lg:h-full mb-8 lg:mb-0">

                        <div className="flex flex-col gap-4 mb-6 lg:mb-0">
                            <Link href="" className="flex items-center text-sm sm:text-base">
                                <EnvelopeIcon className="text-primary-light mr-2 size-6 sm:size-8 lg:size-10" />
                                binhi@wvsu.edu.ph
                            </Link>

                            <Link href="" className="flex items-center text-sm sm:text-base">
                                <Image src={FacebookIcon} className="mr-2 size-6 sm:size-8 lg:size-10" alt="Facebook Icon" />
                                Follow us on Facebook
                            </Link>
                        </div>

                        {/* Copyright - hidden on mobile, shown on lg+ */}
                        <p className="hidden lg:block text-sm sm:text-base text-center lg:text-left">
                            Copyright © 2025. All rights reserved.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-flow-col lg:grid-rows-3 gap-y-3 sm:gap-y-4 lg:gap-y-6 gap-x-6 sm:gap-x-8 lg:gap-x-12 lg:self-start mb-6 lg:mb-0">
                        <Link href="/" className="text-sm sm:text-base hover:text-primary-light transition-colors">About BINHI TBI</Link>
                        <Link href="/" className="text-sm sm:text-base hover:text-primary-light transition-colors">Services of BINHI TBI</Link>
                        <Link href="/" className="text-sm sm:text-base hover:text-primary-light transition-colors">Contact BINHI TBI</Link>
                        <Link href="/" className="text-sm sm:text-base hover:text-primary-light transition-colors">Startup Portfolio</Link>
                        <Link href="/" className="text-sm sm:text-base hover:text-primary-light transition-colors">News and Events</Link>
                    </div>

                </section>

                {/* Copyright - shown on mobile/tablet, hidden on lg+ */}
                <p className="lg:hidden text-sm sm:text-base text-center">
                    Copyright © 2025. All rights reserved.
                </p>
            </div>
        </footer>
    )
}