

import EventSection from "./EventSection"
import SponsorSection from "./SponsorSection"
import AskedQuestions from "./AskedQuestions"
import Carousel from "./Carousel"


export default function Main(){

    return(<>
            <div className=" flex w-screen h-screen flex-col gap-5 items-center">

            <Carousel/>
            <EventSection/>

             
            <SponsorSection/>

            <AskedQuestions/>

            </div>
        </>)



}
