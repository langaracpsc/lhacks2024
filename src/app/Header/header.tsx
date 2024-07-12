'use client';
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Header() {
    // State to determine if the display is in desktop mode
    const [displayCheck, setDisplayCheck] = useState(true);

    // State to manage the open/close state of the hamburger menu
    const [isOpen, setIsOpen] = useState(false);

    // Get the current pathname
    const pathname = usePathname();
    const router = useRouter();

    // Function to toggle the hamburger menu
    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };

    // Effect to manage responsive design based on window width
    useEffect(() => {
        const handleResize = () => {
            setDisplayCheck(window.innerWidth >= 1000);
        };

        // Set initial value and add event listener
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to handle special animation and navigation
    function specialAnimationHandle(whichEnd: string) {
        toggleNavBar();
        if (pathname === "/") {
            router.push("#" + whichEnd);
            router.refresh();
        } else {
            router.push("#" + whichEnd);
        }
    }

    // Function to redirect to the main page
    function redirectMain() {
        router.push("/");
    }

    return (
        <div className={`z-30 upperHeader flex w-full flex-row ${displayCheck ? 'p-[2em] justify-between' : 'p-[2em]'} bg-black bg-opacity-90 fixed top-0 left-0 ${isOpen ? 'flex-col h-full justify-center' : ''}`}>
            <div className={`buttons ml-[2em] ${displayCheck || isOpen ? '' : 'hidden'} ${isOpen ? 'flex flex-col ml-0 ml-[10vw] w-[100%]' : ''}`}>
                <button onClick={redirectMain} className={`mr-[1em] hover:text-orange-600 font-bold text-left ${isOpen ? 'font-normal mr-0 my-[0.5em] border-b-[1px] border-solid border-white text-4xl' : 'text-lg'}`}>Home</button>
            </div>
            <div className={`links mr-[4em] ${displayCheck || isOpen ? '' : 'hidden'} ${isOpen ? 'flex flex-col mr-0 ml-0 ml-[10vw] w-[100%]' : ''}`}>
                <button onClick={() => { router.push("/#sponsors"); toggleNavBar(); }} className={`ml-[1em] text-orange-600 hover:text-white text-left ${isOpen ? 'ml-0 my-[0.5em] border-b-[1px] border-solid border-orange-600 text-2xl' : 'text-lg'}`}>Sponsors</button>
                <button onClick={() => { router.push("/#faq"); toggleNavBar(); }} className={`ml-[1em] text-orange-600 hover:text-white text-left ${isOpen ? 'ml-0 my-[0.5em] border-b-[1px] border-solid border-orange-600 text-2xl' : 'text-lg'}`}>FAQ</button>
            </div>
            <div className={`absolute right-[0.7em] top-[0.7em] ${displayCheck ? 'hidden' : ''}`}>
                <Hamburger direction="left" toggled={isOpen} onToggle={toggleNavBar}></Hamburger>
            </div>
        </div>
    );
}
