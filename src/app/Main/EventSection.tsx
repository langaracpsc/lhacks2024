
import Image from "next/image"
import imgTouse from "../../../assets/HackatonEventDescriptionIMGedited.jpg" 


export default function EventSection(){


    return(

        <>

    
        <div className="flex flex-col border border-orange-500 rounded-lg w-11/12 h-fit justify-start items-center align-baseline  pt-8 pr-8 pb-8 pl-8">
            
            <div className="flex flex-col justify-start align-baseline gap-10">
                

                <h1 className="text-5xl max-[854px]:text-4xl max-[565px]:text-3xl">Event Description</h1>

            
                <div className="flex flex-row gap-10 align-baseline ">
                    <div className="flex flex-col gap-3 align-baseline">
                        <p className=" w-72 h-auto break-all text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dignissimos perspiciatis, harum minus aliquid placeat velit id labore corrupti laudantium reiciendis fuga nobis totam quo vitae ullam, reprehenderit ipsam animi.</p>
                        <h2 className="text-xl font-bold">Workshop Info</h2>
                        <div className="w-72 bg-white">f</div>
                        <div className="w-72 bg-white">f</div>
                    </div>

                    

                    <Image src={imgTouse} alt="not working"  width={400} height={300} className="rounded-lg max-[854px]:w-52  max-[854px]:h-52 max-[633px]:hidden"/>
                </div>

            </div>




        </div>
        
        </>


    )



}