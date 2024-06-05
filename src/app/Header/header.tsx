'use client';
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

export default function Header() {
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

    // function redirectAboutUs(){
    //     router.push("/aboutus")
    // }
    // function redirectMain(){
    //     router.push("/")
    // }


    return (
        // <header className={`flex flex-col items-center w-full h-[50vw]  ${displayCheck ? 'bg-[url("/headerBackground2.jpg")] bg-center bg-no-repeat bg-cover' : ''}`}>
        <header className={`flex flex-col items-center w-full`}>


            {/* <div className={`flex w-full flex-row ${displayCheck ? 'p-[2em] justify-between' : 'p-[2em]'} bg-black bg-opacity-90 fixed top-0 left-0 ${isOpen ? 'flex-col h-full justify-center' : ''}`}> */}

            {/* NAVBAR */}
            <div className={`fixed offset top-0 left-0 z-50 flex w-full flex-row p-[2em] justify-between justify-content: flex-start;'  bg-black bg-opacity-50   ${isOpen ? 'h-full justify-center' : ''}`}>

                <div className={`buttons ml-[2em] ${displayCheck || isOpen ? '' : 'hidden'} ${isOpen ? 'flex flex-col ml-0 ml-[10vw] w-[100%]' : ''}`}>
                    <button className={`mr-[1em] hover:text-orange-600 font-bold text-left ${isOpen ? 'font-normal mr-0 my-[0.5em] border-b-[1px] border-solid border-white text-4xl' : 'text-lg'}`}>Main</button>
                    <button className={`mr-[1em] hover:text-orange-600 font-bold text-left ${isOpen ? 'font-normal mr-0 my-[0.5em] border-b-[1px] border-solid border-white text-4xl' : 'text-lg'}`}>About Us</button>
                    <button className={`mr-[1em] hover:text-orange-600 font-bold text-left ${isOpen ? 'font-normal mr-0 my-[0.5em] border-b-[1px] border-solid border-white text-4xl' : 'text-lg'}`}>Handbook</button>
                </div>

                <div className={`links mr-[4em] ${displayCheck || isOpen ? '' : 'hidden'} ${isOpen ? 'flex flex-col mr-0 ml-0 ml-[10vw] w-[100%]' : ''} `}>
                    <a className={`ml-[1em] text-orange-600 hover:text-white text-left ${isOpen ? 'ml-0 my-[0.5em] border-b-[1px] border-solid border-orange-600 text-2xl' : 'text-lg'}`}>Sponsors</a>
                    <a className={`ml-[1em] text-orange-600 hover:text-white text-left ${isOpen ? 'ml-0 my-[0.5em] border-b-[1px] border-solid border-orange-600 text-2xl' : 'text-lg'}`}>FAQ</a>
                </div>
                <div className={`absolute right-[0.7em] top-[0.7em] ${displayCheck ? 'hidden' : ''}`}>
                    <Hamburger direction="left" onToggle={toggleNavBar}></Hamburger>
                </div>
            </div>

            <div className={`h-[100px]`}></div>


            {/* HERO IMAGE AND REGISTRATION AND MENTOR BUTTON */}
            <div className="relative items-center w-full h-[50vh] max-h-500px bg-center bg-no-repeat bg-cover rounded-md bg-[url('/headerBackground2.jpg')]">
                <div className={`bg-black bg-opacity-50 h-[50vh]`}>

                    <div className={`central part flex flex-col w-full  ${displayCheck ? 'pt-[14em]' : 'pt-[8em]'} items-center`}>
                        <h3 className={`${displayCheck ? 'text-xl' : 'text-base'}`}>September 21 - 22 Langara College</h3>
                        <h1 className={`${displayCheck ? 'text-7xl' : 'text-4xl'}`}><span className='text-orange-600'>Langara</span> Hacks 2024</h1>
                        <div className="buttons flex flex-row">
                            <button className={`${displayCheck ? 'text-xl px-[2em]' : 'text-base px-[1em]'} m-[1em] border-2 border-orange-600 py-[0.3em] bg-black bg-opacity-70 rounded-md hover:scale-[1.05] transition-transform duration-300`}>Apply Now</button>
                            <button className={`${displayCheck ? 'text-xl px-[2em]' : 'text-base px-[1em]'} m-[1em] border-2 border-white py-[0.3em] bg-black bg-opacity-70 rounded-md hover:scale-[1.05] transition-transform duration-300`}>Become a Mentor</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MONTHLY SCHEDULE */}
            {/* gets hidden on mobile/small screen sizes */}
            <div className={`flex flex-row justify-between self-center mt-[3em] ${displayCheck ? '' : 'hidden'}`}>

                <div className='flex flex-col justify-left mx-[5em]'>
                    <h4 className='my-[0.2em] text-xl'>Registration Opens</h4>
                    <p className='text-l my-[0.2em] text-orange-600 text-l'>September 1</p>
                </div>
                <div className='flex flex-col justify-left mx-[5em]'>
                    <h4 className='my-[0.2em] text-xl'>Registration Closed</h4>
                    <p className='text-l my-[0.2em] text-orange-600 text-l'>September 15</p>
                </div>
                <div className='flex flex-col justify-left mx-[5em]'>
                    <h4 className='my-[0.2em] text-xl'>Day of the event</h4>
                    <p className='text-l my-[0.2em] text-orange-600 text-l'>September 28-29</p>
                </div>
            </div>

            <img className={`flex w-[80%] self-center ${displayCheck ? '' : 'hidden'}`} src='/Group_38.svg' />


        </header>
    );
}