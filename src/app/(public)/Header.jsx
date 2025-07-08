import Logo from "@/components/Logo"
import Link from "next/link"


export default function Header() {
    return (

        <header>
            <nav className="min-h-20 max-w-280 lg:max-w-450 mx-auto 
                flex flex-col justify-center md:flex-row mt-6 md:mt-0 md:justify-between items-center ">

                <div className="flex w-screen sm:w-fit justify-center  mx-auto">
                    <Logo version={1}></Logo>
                </div>

                <ul className="flex flex-wrap justify-center text-center mt-2 md:mt-0
                     mx-5 md:mx-auto text-base font-medium max-w-md w-full 
            ">
                    <li className="mt-1.5 sm:mt-0 mx-auto px-2">
                        <Link href={"/"} className="text-secondary-neutral hover:text-gray-400">
                            About BINHI
                        </Link>
                    </li>
                    <li className="mt-1.5 sm:mt-0 mx-auto px-2">
                        <Link href={"/"} className="text-secondary-neutral hover:text-gray-400">
                            Services

                        </Link>
                    </li>
                    <li className="mt-1.5 sm:mt-0 mx-auto px-2">
                        <Link href={"/"} className="text-secondary-neutral hover:text-gray-400">
                            News
                        </Link>
                    </li>
                    <li className="mt-1.5 sm:mt-0 mx-auto px-2">
                        <Link href={"/"} className="text-secondary-neutral hover:text-gray-400">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}