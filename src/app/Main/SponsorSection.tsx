import SponsorBox from "./SponsorBoxes"


interface NameSponsor {

    Name: string[]
}


export default function SponsorSection() {
    let content: NameSponsor = { Name: ["Langara", "__", "__", "__", "__", "__"] }
    return (<>

        <div className="flex flex-col border border-orange-500 rounded-lg w-11/12 h-fit justify-center align-center gap-7 pt-8 pr-8 pb-8 pl-8">

            <div className="flex flex-col items-center gap-6">

                <h1 className="text-5xl">Sponsor Us!</h1>

                <p className=" w-4/5 h-auto break-all text-sm text-center">We are looking for passionate companies and organizations looking to foster talent across the global tech community—people hoping to take on young and innovative minds, presenting meaningful opportunities and challenging the limits of the next generation.</p>


            </div>

            <div className="flex flex-col items-center gap-1">
                <p className=" text-sm">Thank You For</p>
                <p className=" text-2xl font-bold">Our Sponsors</p>


            </div>

            <div className="flex items-center justify-center">
                <div className="grid grid-cols-3 justify-center gap-5">

                    {content.Name.map(((item, index) => <SponsorBox Name={item} key={index} />))}


                </div>
            </div>


        </div>



    </>)



}

