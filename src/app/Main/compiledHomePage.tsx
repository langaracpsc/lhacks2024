

import EventSection from "./EventSection"
import SponsorSection from "./SponsorSection"
import AskedQuestions from "./AskedQuestions"
import CarouselDisplay from "./CarouselDisplay"
import Header from "../Header/header"
import Footer from "../Footer/footer"


export default function Main(){

    return(<>
            <div className=" flex w-screen h-screen flex-col gap-5 items-center overflow-x-hidden">
            <Header/>
            <CarouselDisplay/>
            <EventSection/>

             
            <SponsorSection/>

            <AskedQuestions/>

            <Footer/>

            </div>
        </>)



}
