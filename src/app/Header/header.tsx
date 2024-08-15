'use client';
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [displayCheck, setDisplayCheck] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const toggleNavBar = () => {
        if (displayCheck) return;
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setDisplayCheck(window.innerWidth >= 1000);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    function specialAnimationHandle(whichEnd: string) {
        toggleNavBar();
        if (pathname === "/") {
            scrollToSection(whichEnd);
        } else {
            router.push(`/#${whichEnd}`);
        }
    }

    function redirectMain() {
        if (pathname === "/") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push("/");
        }
    }
    

    return (
        <div className={`z-30 upperHeader flex w-full flex-row p-[2em] fixed top-0 left-0 ${displayCheck ? 'bg-black bg-opacity-30 justify-between bg-gradient-to-b from-black from:90% to-transparent' : 'bg-gradient-to-b from-black from:90% to-black/0'}  ${isOpen ? 'bg-black bg-opacity-50 flex-col h-full justify-center' : ''}`}>
            <div className={`buttons ml-[2em] ${displayCheck || isOpen ? '' : 'hidden'} ${isOpen ? 'flex flex-col ml-0 w-[100%]' : ''}`}>
                <button onClick={() => { specialAnimationHandle('top'); }} className={`mr-[1em] hover:text-orange-600 font-bold text-left ${isOpen ? 'font-normal mr-0 my-[0.5em] border-b-[1px] border-solid border-white text-4xl' : 'text-lg'}`}>Home</button>
            </div>
            <div className={`links mr-[4em] ${displayCheck || isOpen ? '' : 'hidden'} ${isOpen ? 'flex flex-col mr-0 ml-0 w-[100%]' : ''}`}>
                <button onClick={() => { specialAnimationHandle('sponsors'); }} className={`ml-[1em] text-orange-600 hover:text-white text-left ${isOpen ? 'ml-0 my-[0.5em] border-b-[1px] border-solid border-orange-600 text-2xl' : 'text-lg'}`}>Sponsors</button>
                <button onClick={() => { specialAnimationHandle('faq'); }} className={`ml-[1em] text-orange-600 hover:text-white text-left ${isOpen ? 'ml-0 my-[0.5em] border-b-[1px] border-solid border-orange-600 text-2xl' : 'text-lg'}`}>FAQ</button>
            </div>
            <div className={`absolute right-[0.7em] top-[0.7em] rounded-md bg-black bg-opacity-30 ${displayCheck ? 'hidden' : ''}`}>
                <Hamburger direction="left" toggled={isOpen} onToggle={toggleNavBar}></Hamburger>
            </div>
        </div>
    );
}
