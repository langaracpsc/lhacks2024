import Footer from "./Footer/footer";
import HandbookPage from "./Handbook/HandbookUnite";
import Header from "./Header/header";
import AskedQuestions from "./Main/AskedQuestions";
import CarouselDisplay from "./Main/CarouselDisplay";
import EventSection from "./Main/EventSection";
import SponsorDisplay from "./Main/SponsorDisplay";
import SponsorSection from "./Main/SponsorSection";
import About from "./aboutus/about";
export default function Home() {


  return (
    <div className="flex flex-col justify-center items-center overflow-x-clip gap-20 ">
      <Header/>
      
      <EventSection/>

      <SponsorDisplay/>
      
      <CarouselDisplay/>

      <HandbookPage/>

      {/* 
      THIS SHOULD BE IN THE PAGE BUT I DONT HAVE TIME TO FIX IT
      PLEASE ASSIGN TO SOMEONE
      */}
      <AskedQuestions/>
      
      <About/>
      

      {/* I really like this component but it doesn't make sense in a hackathon page */}
      {/* <Events /> */}
      
      {/*
      I think there is some good discussion on how much highlighting to put on the execs 
      who are after all putting the show on 
      this is way too big though
      */}
      {/* <Execs /> */}

      <Footer/>


    </div>
  );
}
