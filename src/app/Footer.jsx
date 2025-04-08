import Image from "next/image"
import Link from 'next/link'
import Logo from "@/components/Logo"
import bgWave from '@/assets/bg-wave-footer.svg'
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import FacebookIcon from '@/assets/facebook-icon.svg'

export default function Footer() {
    return (
        <footer className="text-white ">

            <Image src={bgWave} className="w-full" alt="Wave Footer Background" />

            <div className="bg-secondary w-full h-[300px] 
            flex px-35 items-center
            ">
                <div className="w-fit h-fit" >

                    <Logo version={2}></Logo>
                </div>

                <section className="h-[172px] flex  w-full justify-between items-center px-10 ">

                    <div className="flex flex-col justify-between h-full" >

                        <div className=" flex flex-col gap-4  ">
                            <Link href="" className="flex items-center text-base">
                                <EnvelopeIcon className="text-primary-light mr-2 w-[40px] h-[40px]" />
                                binhi@wvsu.edu.ph
                            </Link>

                            <Link href="" className="flex items-center text-base">
                                <Image src={FacebookIcon} className="mr-2 size-10" alt="Facebook Icon" />
                                Follow us on Facebook
                            </Link>
                        </div>


                        <p className="text-base ">
                            Copyright © 2025. All rights reserved.

                        </p>
                    </div>


                    <div className="grid grid-flow-col grid-rows-3 self-start gap-y-[23px] gap-x-[50px]">
                        <Link href="/" className="text-base">About BINHI TBI</Link>
                        <Link href="/" className="text-base">Services of BINHI TBI</Link>
                        <Link href="/" className="text-base">Contact BINHI TBI</Link>
                        <Link href="/" className="text-base">Startup Portfolio</Link>
                        <Link href="/" className="text-base">News and Events</Link>
                    </div>

                </section>


            </div>
        </footer>
    )
}   