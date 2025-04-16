import Image from "next/image"
import Logo from "@/components/Logo"
import Link from "next/link"

export default function Header() {
    return (

        <nav className="h-[80px] max-w-[1120px] mx-auto
        flex flex-wrap mt-2 sm:mt-0 sm:justify-between sm:items-center ">

            <div className="flex w-screen sm:w-fit justify-center  ">
                <Logo version={1}></Logo>
            </div>

            <ul className="flex space-x-4 sm:space-x-10 mx-auto sm:mx-0 
            text-base font-medium">
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
                    <Link href={"/contacts"} className="text-secondary-neutral hover:text-gray-400">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>

    )
}