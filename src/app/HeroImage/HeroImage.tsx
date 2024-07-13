'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import svggroup from './Group_38.svg';
import { useEffect, useState } from 'react';

export default function HeroImage() {
    const router = useRouter();

    const [displayCheck, setDisplayCheck] = useState(true);

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

    

    return (
        // <div className={`flex flex-col items-center w-full h-[50vw] ${displayCheck ? 'bg-[url("/headerBackground2.jpg")] bg-center bg-no-repeat bg-cover' : ''}`}></div>
        <div className={`flex flex-col items-center w-full h-[50vw] ${true ? 'bg-[url("/headerBackground2.jpg")] bg-center bg-no-repeat bg-cover' : ''}`}>
            <div className="w-full h-full flex flex-col justify-center box-border bg-gradient-to-b from-transparent to-black to-75%">
                <div className={`central part flex flex-col w-full ${displayCheck ? 'mt-[14em]' : 'mt-[8em]'} items-center`}>
                    <h3 className={`${displayCheck ? 'text-xl' : 'text-base'}`}>September 21-22 Langara College</h3>
                    <h1 className={`${displayCheck ? 'text-7xl' : 'text-4xl'}`}><span className='text-orange-600'>Langara</span> Hacks 2024</h1>
                    <div className="buttons flex flex-row">
                        <button onClick={() => { router.push("https://docs.google.com/forms/d/e/1FAIpQLScc94k5CqH31oEn9Zc1WpkDDhlz_sQ9v88ZD40wy6S4ZR51Cw/viewform"); }} className={`${displayCheck ? 'text-xl px-[2em]' : 'text-base px-[1em]'} m-[1em] border-2 border-orange-600 py-[0.3em] bg-black bg-opacity-70 rounded-md hover:scale-[1.05] transition-transform duration-300`}>Apply Now</button>
                        <button onClick={() => { router.push("https://docs.google.com/forms/d/e/1FAIpQLSdGV8ZFfDM96ai8XkMVjAsJ7QSbB9pF2Wos8Z0WqoQDf85YBA/viewform"); }} className={`${displayCheck ? 'text-xl px-[2em]' : 'text-base px-[1em]'} m-[1em] border-2 border-white py-[0.3em] bg-black bg-opacity-70 rounded-md hover:scale-[1.05] transition-transform duration-300`}>Become a Mentor</button>
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
        </div>
    );
}
