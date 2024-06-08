
import Image from "next/image"
import imgTouse from "../../../assets/HackatonEventDescriptionIMGedited.jpg"


export default function EventSection() {


    return (

        <>
            
            {/* <div className="flex flex-col  z border-2  border-orange-500 rounded-lg w-10/12 h-fit justify-start items-center align-baseline  pt-10 pr-10 pb-10 pl-10"> */}
            {/* <div className="flex flex-col w-[100%] h-fit justify-start items-center align-baseline  pt-10 pr-10 pb-10 pl-10">

                <div className="flex flex-col justify-start align-baseline gap-10">


                    <h1 className="text-5xl max-[854px]:text-4xl max-[565px]:text-2xl">Event Description</h1>


                    <div className="flex flex-row gap-10 align-baseline ">

                        <div className="flex flex-col gap-3 align-baseline">

                            <p className=" w-[50vw] h-auto text-lg">
                                Langara Hacks is a two day programming competition that will be held in person at Langara College.
                                A hackathon is a competition where teams of students work together and use their software or hardware skills to build a project in a very short amount of time! This project can be anything from a website, a piece of hardware, a video game, or anything that involves programming. A hackathon is a great way to build connections and to develop your programming skills.

                            </p>
                            {/* <h2 className="text-xl font-bold">Workshop Info</h2>
                        <div className="w-72 bg-white">f</div>
                        <div className="w-72 bg-white">f</div>
                        </div>



                        <Image src={imgTouse} alt="not working" className="h-[200px] rounded-lg object-cover" />
                    </div>

                </div>




            </div>  */}

            <div className="flex flex-row w-100 mx-20 gap-8 justify-center max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-8  ">
                
                <div className="flex flex-col w-2/3 justify-center items-start gap-4 max-[900px]:w-11/12 h-max">

                    <h1 className="text-5xl max-[854px]:text-4xl max-[565px]:text-2xl">About Langara Hacks</h1>
                    {/* <div className='w-11/12 border-b-4 border-orange-600'>
                        <h2 className="text-2xl ">Event Description.</h2>
                    </div> */}
                    <div className='w-11/12'>

                        {/* THIS ALSO NEEDS TO BE REWRITTEN AS WELL */}
                        <p className=" h-auto text-lg">
                            Langara Hacks is a two day programming competition that will be held in person at Langara College.
                            A hackathon is a competition where teams of students work together and use their software or hardware skills to build a project in a very short amount of time! This project can be anything from a website, a piece of hardware, a video game, or anything that involves programming. A hackathon is a great way to build connections and to develop your programming skills.

                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-1/3 justify-start items-baseline h-96 gap-6 max-[900px]:h-fit max-[900px]:items-center max-[900px]:justify-center  max-[900px]:w-2/3">
                    {/* <h1 className="text-6xl max-[1088px]:text-4xl max-[716px]:text-3xl w-max ">ABOUT US</h1> */}
                    <Image src={imgTouse} alt="hackathon photo of last year" className="w-[10em=] rounded-md max-[900px]:w-[20em=]" />
                    {/* <Image src={require("../../../assets/images/group2023.jpg")} className="w-[10em=] rounded-md max-[900px]:w-[20em=]" alt="aboutUsPhoto" /> */}
                </div>


            </div>

        </>


    )



}