"use client"
import { useEffect } from "react";
import Footer from "./Footer/footer";
import HandbookPage from "./Handbook/HandbookUnite";
import Header from "./Header/header";
import AskedQuestions from "./Main/AskedQuestions";
import CarouselDisplay from "./Main/CarouselDisplay";
import EventSection from "./Main/EventSection";
import SponsorDisplay from "./Main/SponsorDisplay";
import About from "./schedule/about";
import { useParams } from 'next/navigation';
import Events from "./schedule/events";
import HeroImage from "./HeroImage/HeroImage";
import SponsorsLogosFooter from "./Footer/logos";

export default function Home() {
  const params = useParams()
  console.log()
  console.log(params)


  useEffect(() => {
    const location = window.location.href;

    if (location.includes("#")) {
      const getTarget = location.slice(location.indexOf("#") + 1, location.length)
      const targetElement = document.getElementById(getTarget + "question"); // Remove leading "#"
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

  }, []);

  return (
    <div className="flex flex-col gap-20 overflow-x-clip scroll-pt-80">
      <Header />
      <div className="flex flex-col justify-center gap-16 items-center scroll-smooth">

        <span id="top" className="-mt-32 pt-[2em] pb-[1.75rem]"></span>

        <HeroImage />

        <EventSection />

        <CarouselDisplay />

        {/* 
        The header is 20px tall
        the -16 margin removes the space created by the 16px gap
        2em + 1.75 rem SHOULD be the height of the header

        it still doesn't line up perfectly but it is good enough
         */}
        <span id="sponsors" className="-mt-32 pt-[2em] pb-[1.75rem]"></span>
        <SponsorDisplay />

        <Events />

        <HandbookPage />

        <span id="faq" className="-mt-32 pt-[2em] pb-[1.75rem]"></span>
        <AskedQuestions />

        <About />

        <SponsorsLogosFooter></SponsorsLogosFooter>

        <Footer></Footer>
      </div>
    </div>
  );
}
