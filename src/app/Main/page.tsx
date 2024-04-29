

import EventSection from "./EventSection"
import SponsorSection from "./SponsorSection"
import AskedQuestions from "./AskedQuestions"
import CarouselDisplay from "./CarouselDisplay"


export default function Main(){

    return(<>
            <div className=" flex w-screen h-screen flex-col gap-5 items-center">

            <CarouselDisplay/>
            <EventSection/>

             
            <SponsorSection/>

            <AskedQuestions/>

            </div>
        </>)



}
