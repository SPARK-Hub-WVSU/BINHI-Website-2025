import { MapPinIcon } from '@heroicons/react/24/solid';
import contacts from './_data/contacts';
import SendMessageBox from './_components/SendMessageBox';
import MapWrapper from './_components/MapWrapper';

export default function Contacts() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 sm:gap-6 w-full max-w-screen py-10 sm:py-5">
        {/* TITLE */}
        <section className="mt-[6rem] w-full max-w-[60rem] px-8 sm:px-4">
            <h1 className="text-center">Ready to launch your next startup?</h1>
            <p className="mt-6 text-justify">
                Inquire for incubation by sending us a letter through our contact details. We are also open to collaborate with non-profits, educational institutes, and organizations in promoting the startup ecosystem through meetups, seminars, and conferences.
            </p>
        </section>

        {/* Contacts */}
        <section className="h-[100rem] flex flex-wrap sm:flex-nowrap mt-[6rem] w-full max-w-[60rem] px-8 sm:px-4 justify-end">
        
          {/* RIGHT on DESKTOP, TOP on MOBILE */}
            <div className="gap-y-[5rem] flex flex-col w-full sm:w-1/2 p-2 order-1 sm:order-2">
              {/* ADDRESS AND MAP */}
              {/* ADDRESS */}
              <div className="flex flex-col  gap-y-3 p-2">
                <div className="flex flex-row items-center gap-x-3">
                  <MapPinIcon className="text-primary w-[40px] h-[40px]" />
                  <p className="font-bold text-primary">Address</p>
                </div>
                <p>BINHI Facility, West Visayas State University, La Paz, Iloilo City, Philippines, Iloilo City, Philippines</p>
              </div>

              {/* GOOGLE MAP */}
              <div className=''>
                <MapWrapper/>
              </div>
            </div>

            {/* LEFT on DESKTOP, BOTTOM on MOBILE */}
            <div className="flex flex-col gap-y-[5rem] w-full sm:w-1/2 p-2 order-2 sm:order-1">
            {/* CONTACTS AND MESSAGE */}  
              {/* CONTACTS */}      
              <div className="flex flex-col gap-y-5 p-2">
                {contacts.map((contact, index) => (
                <div key={index} className="flex flex-row items-center gap-x-3">
                  {contact.icon}
                  <p>{contact.details}</p>
                </div>
                ))}
              </div>

                {/* SEND A MESSAGE */}
                <SendMessageBox />

            </div>

        </section>

    </div>
  );
}
