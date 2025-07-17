import { MapPinIcon } from '@heroicons/react/24/solid';
import contacts from './_data/contacts';
import SendMessageBox from './_components/SendMessageBox';
import MapWrapper from './_components/MapWrapper';


export default function Contacts() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 sm:gap-6 w-full max-w-screen py-10 sm:py-5">
        {/* TITLE */}
        <section className="mt-[3rem] w-full max-w-[65rem] md:px-8 px-4">
            <h1 className="text-center md:leading-[3rem] lg:leading-[4rem] text-3xl md:text-4xl lg:text-5xl">Ready to launch your <br/> next startup?</h1>
            <p className="mt-10 text-lg lg:text-2xl text-left ">
                Inquire for incubation by sending us a letter through our contact details. We are also open to collaborate with non-profits, educational institutes, and organizations in promoting the startup ecosystem through meetups, seminars, and conferences.
            </p>
        </section>

        {/* Contacts */}
        <section className="md:h-[60rem] h-[80rem] gap-x-[2rem] gap-y-[2rem] flex flex-wrap sm:flex-nowrap mt-[1rem] md:mt-[2rem] w-full max-w-[65rem] md:px-8 px-4 justify-center">

          {/* RIGHT on DESKTOP, TOP on MOBILE */}
            <div className="flex md:gap-y-[5rem] gap-y-[1.8rem] flex-col w-full  sm:w-1/2 p-2 order-1 sm:order-2">
              {/* ADDRESS AND MAP */}
              {/* ADDRESS */}
              <div className="h-[10rem] md:h-[12rem] flex flex-col p-2">
                <div className="flex flex-row items-center gap-x-3 mb-2">
                  <MapPinIcon className="text-primary size-[40px]" />
                  <h2 className="font-bold text-primary text-2xl md:text-3xl">Address</h2>
                </div>
                <p className='text-lg lg:text-2xl'>BINHI Facility, West Visayas State University, La Paz, Iloilo City, Philippines, Iloilo City, Philippines</p>
              </div>
              {/* MAP */}
              <div className='flex justify-center'>
                <MapWrapper/>
              </div>
            </div>

            {/* LEFT on DESKTOP, BOTTOM on MOBILE */}
            <div className="flex flex-col md:gap-y-[5rem] gap-y-[1.8rem] w-full sm:w-1/2 p-2 order-2 sm:order-1">
            {/* CONTACTS AND MESSAGE */}  
              {/* CONTACTS */}
              <div className="h-[10rem] md:h-[12rem] flex flex-col gap-y-4 p-2">
                {contacts.map((contact, index) => (
                <div key={index} className="flex flex-row items-center gap-x-3">
                  {contact.icon}
                  <p className='text-lg lg:text-2xl'>{contact.details}</p>
                </div>
                ))}
              </div>
                {/* SEND A MESSAGE */}
                <div className='flex justify-center'>
                  <SendMessageBox />
                </div>
            </div>
        </section>
    </div>
  );
}
