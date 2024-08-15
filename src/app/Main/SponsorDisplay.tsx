import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import langaraCollege from "../../../assets/sponsors/langara_logo.jpg"
import Microserve from '../../../public/MicroserveMicroUpdate.svg'
import MLH from "../../../assets/sponsors/mlh_logo.png"
import langaraCollegeTwo from "../../../assets/sponsors/langara_logo.jpg"
import Samsung from "../../../public/SamsungSamsungUpdate.svg"
import Defang from "../../../public/DefangDefangUpdateTwo.svg"
import LangaraAP from "../../../public/VectorLangaraApplieScienceUpdate.svg"
import LangaraCS from "../../../public/VectorLangaraCSUpdate.svg"
import LangaraInfoTech from "../../../public/VectorLangaraITupdate.svg"
import LangaraBio from "../../../public/VectorLangaraBio.svg"
import LangaraProvostOffice from "../../../public/VectorLangaraProvost.svg"
import LangaraMath from "../../../public/VectorMathLangaraUpadate2.svg"
import { useRouter } from 'next/navigation';


interface Sponsor {
    name: string;
    logo: string;
    link: string;
    size: string;
    row: number;
}

const sponsorsData = {
    current: [
        {
            name: 'Micro Serve',
            logo: Microserve,
            link: "https://www.microserve.ca/",
            size: 'w-48 h-48',
            row: 1
        },
        {
            name: 'Samsung',
            logo: Samsung,
            link: "https://www.samsung.com/ca/",
            size: 'w-48 h-48',
            row: 1
        },
        {
            name: 'Defang',
            logo: Defang,
            link: "https://defang.io/",
            size: 'w-48 h-48',
            row: 1
        },
        {
            name: 'Langara Information Technology',
            logo: LangaraInfoTech,
            link: "https://langara.ca/information-technology/",
            size: 'w-48 h-48',
            row: 2
        },
        {
            name: 'Langara Computer Science',
            logo: LangaraCS,
            link: "https://langara.ca/departments/computer-science/index.html",
            size: 'w-48 h-48',
            row: 2
        },
       
        {
            name: 'Langara Bio Informatics',
            logo: LangaraBio,
            link: "https://langara.ca/programs-and-courses/programs/bioinformatics/index.html",
            size: 'w-48 h-48',
            row: 2
        },
        {
            name: 'Langara Applied Science',
            logo: LangaraAP,
            link: "https://langara.ca/programs-and-courses/courses/APSC/index.html",
            size: 'w-48 h-48',
            row: 3
        },
        {
            name: 'Langara Mathematics',
            logo: LangaraMath,
            link: "https://langara.ca/departments/mathematics/index.html",
            size: 'w-48 h-48',
            row: 3
        },
       
        {
            name: 'Langara Provost Office',
            logo: LangaraProvostOffice,
            link: "https://langara.ca/about-langara/academics/index.html",
            size: 'w-48 h-48',
            row: 3
        }
        
    ],
   
};

const SponsorDisplay: React.FC = () => {
    const router = useRouter()

    const renderSponsors = (sponsors: Sponsor[]) => {
        const rows: { [key: number]: Sponsor[] } = {};

        sponsors.forEach(sponsor => {
            if (!rows[sponsor.row]) {
                rows[sponsor.row] = [];
            }
            rows[sponsor.row].push(sponsor);
        });

        return Object.keys(rows).map(row => (
            <div key={row} className="flex flex-wrap justify-center items-center gap-10 max-[742px]:w-6/12 ">
                {rows[parseInt(row)].map(sponsor => (
                    <div key={sponsor.name} className={` flex  justify-center items-center w-[200px] h-[200px]`}>
                        
                            <Image
                            onClick={()=>{router.push(sponsor.link)}} 
                          
                          
                                src={sponsor.logo}
                                alt={`${sponsor.name} logo`}

                                className={`w-max h-max fill-white  `}
                                
                            />
                     


                    </div>
                ))}
            </div>
        ));
    };

    return (
        <div className="flex flex-col w-11/12  gap-10 justify-center items-center ">



            <h2 className="text-2xl font-bold mb-4 text-center">Sponsors</h2>
            {renderSponsors(sponsorsData.current)}

           

            <div className="flex justify-center items-center h-full">
                <a href="mailto:langaracompsciclub@gmail.com" className="text-base px-[1em] m-[1em] border-2 border-orange-600 py-[0.3em] bg-black bg-opacity-70 rounded-md hover:scale-[1.05] transition-transform duration-300">
                    Interested in sponsoring? Reach out!
                </a>
            </div>


        </div>
    );
};

export default SponsorDisplay;
