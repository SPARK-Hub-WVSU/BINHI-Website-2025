"use client";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import "@/styles/pages/contacts.css";

export default function SendMessageBox() {
  return (
    <form action="mailto:binhi@wvsu.edu.ph" method="post" encType="text/plain" className="w-[27rem] h-[28rem] md:w-[27rem] md:h-[40rem] rounded-[2rem] shadow-2xl message-box">
      <div className="p-3 md:p-8">
        <p className="font-bold text-primary pl-5 text-xl md:text-2xl">Send us a message</p>
        {/* INPUT */}
        <div className="p-3 md:p-5 flex flex-col gap-y-3 md:gap-y-7 text-gray-700">
          <label htmlFor="name" className="flex flex-col gap-1">
            <span className="pl-1">Name</span>
            <input
              id="name"
              name="Name"
              type="text"
              className="w-full h-7 md:h-12 pl-1 border-[1px] border-primary bg-transparent focus:outline-none rounded-md"
            />
          </label>

          <label htmlFor="email" className="flex flex-col gap-1">
            <span className="pl-1">Email</span>
            <input
              id="email"
              name="Email"
              type="text"
              className="w-full h-7 md:h-12 pl-1 border-[1px] border-primary bg-transparent focus:outline-none rounded-md"
            />
          </label>

          <label htmlFor="phone" className="flex flex-col gap-1">
            <span className="pl-1">Phone</span>
            <input
              id="phone"
              name="Phone"
              type="text"
              className="w-full h-7 md:h-12 pl-1 border-[1px] border-primary bg-transparent focus:outline-none rounded-md"
            />
          </label>

          <label htmlFor="message" className="flex flex-col gap-1">
            <span className="pl-1">Message</span>
            <textarea
              id="message"
              name="Message"
              className="w-full h-[4rem] pl-1 rounded-xl border-[1px] border-primary bg-transparent focus:outline-none"
            />
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="bg-primary hover:bg-primary-dark focus:outline-3 focus:outline-blue-800 text-white ml-auto p-2 md:p-3 flex flex-row gap-x-5 w-[13.5rem] md:w-[17rem] rounded-l-3xl items-center justify-end
        transition-all duration-200 hover:scale-105 hover:shadow-lg group"
      >
        <p className="text-lg md:text-xl font-semibold">Send Message</p>
        <ArrowRightIcon className="ml-3 size-5 md:size-6 lg:size-7 stroke-2 text-white
            transition-transform duration-200 group-hover:translate-x-1" stroke="currentColor" />
      </button>
    </form>
  );
}
