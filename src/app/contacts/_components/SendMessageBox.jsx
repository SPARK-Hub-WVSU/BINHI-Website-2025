"use client";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
export default function SendMessageBox() {
    return (
    <div className="bg-[#E5F0DC] h-[36rem] rounded-4xl shadow-black">
        <div className="p-8">
        <p className="font-bold text-primary pl-5">Send us a message</p>
            {/* INPUT */}
            <div className="p-5 flex flex-col gap-y-9">
                <input name="Name" type="text" className="w-full h-12 pl-1 border-0 border-b-[1px] border-primary bg-transparent focus:outline-none text-gray-700 placeholder-gray-400" placeholder="Name"/>
                <input name="Email" type="text" className="w-full h-12 pl-1 border-0 border-b-[1px] border-primary bg-transparent focus:outline-none text-gray-700 placeholder-gray-400" placeholder="Email"/>
                <input name="Phone" type="text" className="w-full h-12 pl-1 border-0 border-b-[1px] border-primary bg-transparent focus:outline-none text-gray-700 placeholder-gray-400" placeholder="Phone"/>
                <textarea name="Phone" type="text" className="mt-3 w-full h-[4rem] pl-1 rounded-xl border-[1px] border-primary bg-transparent focus:outline-none text-gray-700 placeholder-gray-400" placeholder="Message"/>
            </div>
        </div>
        <button type='button' className="bg-primary ml-auto p-3 flex flex-row gap-x-5 w-[17rem] rounded-l-3xl items-center">
            <p className="text-white">Send Message</p>
            <ArrowRightIcon className="text-white w-[40px] h-[40px]" />
        </button>
    
    </div>
    );
}