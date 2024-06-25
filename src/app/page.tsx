import Footer from "./Footer/footer";
import HandbookPage from "./handbook/HandbookUnite";
import Header from "./Header/header";
import AskedQuestions from "./Main/AskedQuestions";
import CarouselDisplay from "./Main/CarouselDisplay";
import EventSection from "./Main/EventSection";
import SponsorDisplay from "./Main/SponsorDisplay";
import SponsorSection from "./Main/SponsorSection";
import About from "./aboutus/about";
export default function Home() {


  return (
    <div className="flex flex-col gap-20 overflow-x-clip">
      <Header/>
      <div className="flex flex-col justify-center gap-8 items-center">
        <EventSection/>

        <SponsorDisplay/>

        <CarouselDisplay/>

        <HandbookPage/>

        <AskedQuestions/>

        <About/>
      </div>

      

      <Footer></Footer>
    </div>
  );
}
