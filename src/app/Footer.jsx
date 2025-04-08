import Logo from "@/components/Logo"
import Link from 'next/link'
import bgWave from '@/assets/bg-wave-footer.svg';
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="text-white flex flex-col">
            <Image src={bgWave} className="w-full" alt="" />
            <div className="bg-dark-accent flex px-36 py-8 items-center">

                <div className="w-fit h-fit" >
                    <Logo />
                </div>

                <section className="h-[172px] flex  w-full justify-between items-center px-10 ">

                    <div className="flex flex-col justify-between h-full" >

                        <div className=" flex flex-col gap-4  ">
                            <a href="" className="flex items-center text-base">
                                <i className="mail-icon"></i>
                                binhi@wvsu.edu.ph
                            </a>

                            <a href="" className="flex items-center text-base">
                                <i className="fb-icon"></i>
                                Follow us on Facebook
                            </a>
                        </div>


                        <p className="text-base ">
                            Copyright © 2025. All rights reserved.
                        </p>
                    </div>


                    <div className="flex self-start gap-y-[23px] gap-x-[50px]">
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