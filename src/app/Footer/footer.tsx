import Module from "module";
import blahaj from "../../../assets/images/blahaj.png"
import Image from 'next/image';

export default function Footer(){
    return(
        <footer className="flex flex-col gap-10 w-[100%]">
            
            <div className="ml-10">
                <p>Made with love by the <a href="https://www.langaracs.ca/" className="text-orange-500">Langara Computer Science Club</a>.</p>
                <p>©Copyright LCSC 2024</p>
                <br></br>
            </div>

            <a href="https://findblahaj.langaracs.ca/" target='_blank' className='w-[4em] ml-[90vw] absolute pb-10'><Image src={blahaj} alt={'ikea shark'}></Image></a>



            
        </footer>
    );
}



// import Module from "module";
// import SponsorsLogosFooter from "./logos";

// export default function Footer(){
//     return(
//         <footer>
//             <div data-carousel="slide" className="logosSection w-[100%] flex flex-row justify-between overflow-x-hidden overflow-y-visible whitespace-nowrap p-[0.5em] slide-right">
//                 <SponsorsLogosFooter></SponsorsLogosFooter>
//             </div>
//             <div className="flex flex-row items-center justify-center bg-neutral-700">
//                 <p className="text-base m-[0.3em]">qwer*qwer*qwer*qwer</p>
//             </div>
            
//         </footer>
//     );
// }
