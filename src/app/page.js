import Header from "./Header";
import Footer from "./Footer";
import LinkButton from "@/components/LinkButton";
import heroImage from '@/assets/hero.svg'

import { Heart } from "@phosphor-icons/react/dist/ssr/Heart";
import { GlobeHemisphereWest } from "@phosphor-icons/react/dist/ssr/GlobeHemisphereWest";
import { Monitor } from "@phosphor-icons/react/dist/ssr/Monitor";
import { Flask } from "@phosphor-icons/react/dist/ssr/Flask";


export default function Home() {
  return (
    <>
      <div className="">

        <Header />

        {/* ------------------- HERO -------------------*/}
        <section className="mt-5 min-h-screen bg-no-repeat bg-cover bg-center
        
        "
          style={{ backgroundImage: `url(${heroImage.src})`, backgroundSize: '105% auto' }}
        >


          <div className=" pt-[140px]  pl-[170px] w-fit hidden lg:block">
            <h1 className="w-[615px]  mb-5 
            text-[#0D3B09] text-[50px] font-bold leading-[75px] ">
              Nurturing Seeds of<br /> Ideas <span className="text-accent-2">One Step <br />at a Time.</span>
            </h1>

            <LinkButton href="/">Incubate your startup with us</LinkButton>
          </div>
        </section>


        {/* ------------------- MISSION  -------------------*/}
        <section className="relative">
          <div className="w-full h-[744px] mission absolute -top-5 z-0"></div>


          <section className="relative z-10 h-fit flex flex-col justify-center items-center"

          >

            <div className="mt-[150px] max-w-[789px]">
              <h2 className="text-accent-2 font-bold text-5xl text-center">
                Our Mission
              </h2>
              <p className="mt-[17px] text-justify text-2xl">
                is to
                <span className="text-accent-2 font-semibold">
                  empower innovation and economic growth by inspiring and nurturing technology-based startups
                </span>
                , fostering collaboration between academia, industry, and government, and advancing the commercialization of local technologies in the region.
              </p>

            </div>


            <div className="mt-[90px] max-w-[789px] ">
              <h2 className="text-accent-2 font-bold text-5xl text-center">
                We Envision
              </h2>
              <p className="mt-[17px] text-justify text-2xl" >
                an ecosystem where
                <span className="text-accent-2 font-semibold">
                  technology-based startups flourish, local innovations prosper, and collaboration propels regional economic growth
                </span>
                , establishing BINHI as a respected leader in enterprising innovations.
              </p>
            </div>


            <div className="max-w-[740px] mt-[150px]">
              <h2 className="text-accent-2 font-bold text-5xl text-center">
                BINHI accepts and nurtures startups in four key sectors:
              </h2>

              <ul className="ml-[100px] mt-[50px]">
                <li className="flex items-center text-[32px] mb-[30px]">
                  <Heart size={40} weight="fill" className="text-accent-2 mr-[34px]" />
                  Biomedical and Healthcare
                </li>
                <li className="flex items-center text-[32px] mb-[30px]">
                  <GlobeHemisphereWest size={40} weight="fill" className="text-accent-2 mr-[34px]" />
                  Agri-Aqua and Green Technologies
                </li>
                <li className="flex items-center text-[32px] mb-[30px]">
                  <Monitor size={40} weight="fill" className="text-accent-2 mr-[34px]" />
                  Emerging Technologies / ICT
                </li>
                <li className="flex items-center text-[32px] ">
                  <Flask size={40} weight="fill" className="text-accent-2 mr-[34px]" />
                  Herbal & Natural Products
                </li>
              </ul>
            </div>
          </section >
        </section>


        {/* <Footer /> */}
      </div >

    </>
  );
}
