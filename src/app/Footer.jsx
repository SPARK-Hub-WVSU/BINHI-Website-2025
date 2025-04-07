import Image from "next/image"
import Link from 'next/link'
import Logo from "@/components/Logo"
import { FacebookLogo } from "@phosphor-icons/react/dist/ssr/FacebookLogo";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";


export default function Footer() {
    return (
        <footer className="text-white ">

            <img src="/footer.svg" alt="" className="w-screen" />

            <div className="bg-[#0d3b09] w-screen h-[300px] 
            flex px-35 items-center
            ">
                <div className="w-fit h-fit" >
                    <Logo version={2}></Logo>
                </div>

                <section className="h-[172px] flex  w-full justify-between items-center px-10 ">

                    <div className="flex flex-col justify-between h-full" >

                        <div className=" flex flex-col gap-4  ">
                            <a href="" className="flex items-center text-base">
                                <EnvelopeSimple size={40} weight="fill" className="text-[#7ed957] mr-2" />
                                binhi@wvsu.edu.ph
                            </a>

                            <a href="" className="flex items-center text-base">
                                <FacebookLogo size={40} weight="fill" className="text-[#7ed957] mr-2" />
                                Follow us on Facebook
                            </a>
                        </div>


                        <p className="text-base ">
                            Copyright © 2025. All rights reserved.

                        </p>
                    </div>


                    <div className="grid grid-flow-col grid-rows-3 flex self-start gap-y-[23px] gap-x-[50px]">
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