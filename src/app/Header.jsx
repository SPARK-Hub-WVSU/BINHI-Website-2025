import Logo from "@/components/Logo";

export default function Header() {
    return (

        <nav className="h-[80px] max-w-[1120px] mx-auto
        flex flex-wrap mt-2 sm:mt-0 sm:justify-between sm:items-center ">

            <div className="flex w-screen sm:w-fit justify-center  ">
                <Logo />
            </div>

            <ul className="flex space-x-4 sm:space-x-10 mx-auto sm:mx-0 
            text-base font-medium
            ">
                <li><a href="#" className="text-[#1D1D1F] hover:text-gray-400">About BINHI</a></li>
                <li><a href="#" className="text-[#1D1D1F] hover:text-gray-400">Services</a></li>
                <li><a href="#" className="text-[#1D1D1F] hover:text-gray-400">News</a></li>
                <li><a href="#" className="text-[#1D1D1F] hover:text-gray-400">Contact Us</a></li>
            </ul>
        </nav>

    )
}