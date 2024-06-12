import ExecMiniProfiles from "./logos";

export default function Footer(){
    return(
        <footer className="w-100">


            {/* Is there any way to slow this down a little bit? */}
            <div data-carousel="slide" className="logosSection flex flex-row justify-between overflow-x-hidden overflow-y-visible whitespace-nowrap slide-right">
                <ExecMiniProfiles/>
            </div>

            {/* <div className="flex flex-row items-center justify-center bg-neutral-700">
                <p className="text-base m-[0.3em]">qwer*qwer*qwer*qwer</p>
            </div> */}

            
            {/* TODO: ADD A LOT MORE STUFF HERE SUCH AS EMAIL AND SOCIAL MEDIA LINKS */}
            <div className="w-100 h-10 m-10">
                <p>Made with love by the <a href="https://www.langaracs.ca/">Langara Computer Science Club</a>.</p>
            </div>
            
        </footer>
    );
}