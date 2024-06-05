import Footer from "./Footer/footer";
import HandbookPage from "./Handbook/HandbookUnite";
import Header from "./Header/header";
import AskedQuestions from "./Main/AskedQuestions";
import CarouselDisplay from "./Main/CarouselDisplay";
import EventSection from "./Main/EventSection";
import SponsorSection from "./Main/SponsorSection";
import About from "./aboutus/about";
import Events from "./aboutus/events";
import Execs from "./aboutus/execs";
export default function Home() {


  return (
    <div className="min-h-screen container gap-14">
      <Header></Header>
      

      <About/>

      <HandbookPage></HandbookPage>
      <EventSection/>

        
      <SponsorSection/>

      <AskedQuestions/>

      <CarouselDisplay/>

      

      {/* I really like this component but it doesn't really make sense in a hackathon page */}
      {/* <Events /> */}
      
      <Execs />

      
      {/* <Footer></Footer> */}
    </div>
  );
}
