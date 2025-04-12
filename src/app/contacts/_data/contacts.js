import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import FacebookIcon from '@/assets/facebook-icon.svg';

export default
[
    {
        "details": "binhi@wvsu.edu.ph",
        "icon": <EnvelopeIcon className="text-primary w-[40px] h-[40px]" />
    },
    {
        "details": "(033) 321-0358",
        "icon": <PhoneIcon className="text-primary w-[40px] h-[40px]" />
    },
    {
        "details": "WVSU BINHI TBI",
        "icon": <Image src={FacebookIcon} alt="FB Icon" className="text-primary w-[40px] h-[40px]"/>
    }

]