'use client';
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image'
import svggroup from "./Group_38.svg"
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()



   

    const [displayCheck, setDisplayCheck] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };

    const router = useRouter()


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setDisplayCheck(false);
            }
            else {
                setDisplayCheck(true);
            }
        };
    

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function redirectAboutUs() {
        router.push("/schedule")
    }
    function redirectMain() {
        router.push("/")
    }
    function redirectHandbook() {
        router.push("/Handbook")

    }

    function specialAnimationHandle(whichEnd:string){
        toggleNavBar()
        if(pathname == "/"){
            
            router.push("#" + whichEnd)
            router.refresh()

            
        }else{
            router.push("#" + whichEnd)

        }
        

    }
   
    

    // picture not full screen as it was
    return (<header className={`flex flex-col items-center w-full h-[50vw] ${displayCheck ? 'bg-[url("/headerBackground2.jpg")] bg-center bg-no-repeat bg-cover' : ''}`}>
        <div className="w-full h-full flex flex-col justify-center box-border bg-gradient-to-b from-transparent to-black to-75%">
            <div className={`z-30 upperHeader flex w-full flex-row ${displayCheck ? 'p-[2em] justify-between' : 'p-[2em]'} bg-black bg-opacity-90 fixed top-0 left-0 ${isOpen ? 'flex-col h-full justify-center' : ''}`}>
                <div className={`buttons ml-[2em] ${displayCheck || isOpen ? '' : 'hidden'} ${isOpen ? 'flex flex-col ml-0 ml-[10vw] w-[100%]' : ''}`}>
                    <button onClick={redirectMain} className={`mr-[1em] hover:text-orange-600 font-bold text-left ${isOpen ? 'font-normal mr-0 my-[0.5em] border-b-[1px] border-solid border-white text-4xl' : 'text-lg'}`}>Home</button>
                    
                </div>
                    
                <div className={`links mr-[4em] ${displayCheck || isOpen ? '' : 'hidden'} ${isOpen ? 'flex flex-col mr-0 ml-0 ml-[10vw] w-[100%]' : ''}`}>
                    <button onClick={()=>{router.push("/#sponsorquestion"); toggleNavBar()}}  className={`ml-[1em] text-orange-600 hover:text-white text-left ${isOpen ? 'ml-0 my-[0.5em] border-b-[1px] border-solid border-orange-600 text-2xl' : 'text-lg'}`}>Sponsors</button>

                    <button onClick={()=>{router.push("/#boxquestion")}} className={`ml-[1em] text-orange-600 hover:text-white text-left ${isOpen ? 'ml-0 my-[0.5em] border-b-[1px] border-solid border-orange-600 text-2xl' : 'text-lg'}`}>FAQ</button>
                </div>
                <div className={`absolute right-[0.7em] top-[0.7em] ${displayCheck ? 'hidden' : ''}`}>
                    <Hamburger direction="left" toggled={isOpen} onToggle={toggleNavBar}></Hamburger>
                </div>
            </div>
            <div className={`central part flex flex-col w-full  ${displayCheck ? 'mt-[14em]' : 'mt-[8em]'} items-center`}>
                <h3 className={`${displayCheck ? 'text-xl' : 'text-base'}`}>September 21-22 Langara College</h3>
                <h1 className={`${displayCheck ? 'text-7xl' : 'text-4xl'}`}><span className='text-orange-600'>Langara</span> Hacks 2024</h1>
                <div className="buttons flex flex-row">
                    <button onClick={()=>{router.push("https://docs.google.com/forms/d/e/1FAIpQLScc94k5CqH31oEn9Zc1WpkDDhlz_sQ9v88ZD40wy6S4ZR51Cw/viewform")}} className={`${displayCheck ? 'text-xl px-[2em]' : 'text-base px-[1em]'} m-[1em] border-2 border-orange-600 py-[0.3em] bg-black bg-opacity-70 rounded-md hover:scale-[1.05] transition-transform duration-300`}>Apply Now</button>
                    <button onClick={()=>{router.push("https://docs.google.com/forms/d/e/1FAIpQLSdGV8ZFfDM96ai8XkMVjAsJ7QSbB9pF2Wos8Z0WqoQDf85YBA/viewform")}} className={`${displayCheck ? 'text-xl px-[2em]' : 'text-base px-[1em]'} m-[1em] border-2 border-white py-[0.3em] bg-black bg-opacity-70 rounded-md hover:scale-[1.05] transition-transform duration-300`}>Become a Mentor</button>
                </div>
            </div>

            <div className={`arrow flex flex-row w-[80%] justify-between self-center mt-[3em] ${displayCheck ? '' : 'hidden'}`}>
                <div className='flex flex-col justify-left mx-[5em]'>
                    <h4 className='my-[0.2em] text-xl'>Registration Opens</h4>
                    <p className='text-l my-[0.2em] text-orange-600 text-l'>June 28</p>
                </div>
                <div className='flex flex-col justify-left mx-[5em]'>
                    <h4 className='my-[0.2em] text-xl'>Registration Closed</h4>
                    <p className='text-l my-[0.2em] text-orange-600 text-l'>September 15</p>
                </div>
                <div className='flex flex-col justify-left mx-[5em]'>
                    <h4 className='my-[0.2em] text-xl'>Day of the event</h4>
                    <p className='text-l my-[0.2em] text-orange-600 text-l'>September 21-22</p>
                </div>
            </div>
            <Image src={svggroup} alt={'cool arrow below the schedule that represents the passage of time'} className='flex w-[80%] self-center'></Image>
            
        </div>
    </header>
    );
}
