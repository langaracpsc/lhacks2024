import SponsorsLogosFooter from "./logos";

export default function Footer(){
    return(
        <footer className="w-100">
            <div data-carousel="slide" className="logosSection w-100 flex flex-row justify-between overflow-x-hidden overflow-y-visible whitespace-nowrap slide-right">
                <SponsorsLogosFooter></SponsorsLogosFooter>
            </div>

            {/* <div className="flex flex-row items-center justify-center bg-neutral-700">
                <p className="text-base m-[0.3em]">qwer*qwer*qwer*qwer</p>
            </div> */}
            
        </footer>
    );
}