import Module from "module";
import SponsorsLogosFooter from "./logos";

export default function Footer(){
    return(
        <footer className="flex flex-col  gap-10">
            
        <SponsorsLogosFooter></SponsorsLogosFooter>
        <div className="w-100 h-10 m-10">
            <p>Made with love by the <a href="https://www.langaracs.ca/">Langara Computer Science Club</a>.</p>
        </div>
            
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