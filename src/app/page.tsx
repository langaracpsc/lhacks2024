"use client"
import { useEffect } from "react";
import Footer from "./Footer/footer";
import HandbookPage from "./Handbook/HandbookUnite";
import Header from "./Header/header";
import AskedQuestions from "./Main/AskedQuestions";
import CarouselDisplay from "./Main/CarouselDisplay";
import EventSection from "./Main/EventSection";
import SponsorDisplay from "./Main/SponsorDisplay";
import SponsorSection from "./Main/SponsorSection";
import About from "./aboutus/about";
import { useParams } from 'next/navigation' ;

export default function Home() {
  const params = useParams()
  console.log()
  console.log(params)

 
    useEffect(() => {
      const location = window.location.href;
   
      if (location.includes("#")) {
        const getTarget = location.slice(location.indexOf("#")+1,location.length)
        const targetElement = document.getElementById(getTarget + "question"); // Remove leading "#"
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
      

    }, []);
  
    

    
  return (
    <div className="flex flex-col gap-20 overflow-x-clip">
      <Header/>
      <div className="flex flex-col justify-center gap-32 items-center">
        <EventSection/>

        <span id="sponsorquestion"></span>
        <SponsorDisplay/>
        
        <CarouselDisplay/>

        <HandbookPage/>
        <span id="boxquestion" ></span>
        <AskedQuestions/>
   

        <About/>
      </div>

      <Footer></Footer>
    </div>
  );
}
