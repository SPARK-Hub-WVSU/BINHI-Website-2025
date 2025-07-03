import Logo from "@/components/Logo"
import Link from "next/link"


export default function Header() {
    return (

        <header>
            <nav className="h-20 max-w-280 lg:max-w-450 mx-auto 
        flex flex-col md:flex-row  mt-4 md:mt-0 md:justify-between md:items-center ">

                <div className="flex w-screen sm:w-fit justify-center  mx-auto">
                    <Logo version={1}></Logo>
                </div>

                <ul className="flex flex-wrap justify-center space-x-4 mt-4 md:mt-0
            sm:space-x-10 mx-auto text-base font-medium 
            ">
                    <li>
                        <Link href={"/"} className="text-secondary-neutral hover:text-gray-400">
                            About BINHI
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"} className="text-secondary-neutral hover:text-gray-400">
                            Services

                        </Link>
                    </li>
                    <li>
                        <Link href={"/"} className="text-secondary-neutral hover:text-gray-400">
                            News
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"} className="text-secondary-neutral hover:text-gray-400">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}