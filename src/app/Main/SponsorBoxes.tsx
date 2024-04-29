

interface NameSponsor{

    Name:string
    
}


export default function SponsorBox(sponsor : NameSponsor){



    return(<div className=" w-64 h-8 border border-cyan-50 flex items-center justify-center rounded-lg">

        <p>{sponsor.Name}</p>



    </div>)



}