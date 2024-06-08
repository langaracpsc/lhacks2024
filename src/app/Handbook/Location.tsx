"use client";
import React, { useEffect, useState } from "react";

export default function Location() {
    const [displayCheck, setDisplayCheck] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setDisplayCheck(false);
            }
            else{
                setDisplayCheck(true);
            }
        };

        handleResize(); 

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`flex  gap-[12vw] m-[2em] my-0 ${displayCheck ? 'flex-row' : 'flex-col'}`}>
            <div className="flex flex-col items-left">
                <div>
                    <h2 className="text-3xl font-bold">Location</h2>   
                    <p className="text-orange-600 text-xl" >100 W 49th Ave, Vancouver</p>
                    <p className="text-orange-600 text-xl">Langara College</p>
                    <p className="text-orange-600 text-xl">T Gallery</p>
                    {/* <p className="text-orange-600 text-xl">Room 302</p> */}
                </div>

            </div>
            <div className={`flex items-center justify-center border-2 border-orange-600 rounded-md ${displayCheck ? 'w-[40vw] h-[30vw]' : 'w-[80vw] h-[70vw]'}`}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10422.851466753393!2d-123.1076016!3d49.2249723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486746f412563f7%3A0x36606d221509fdfe!2z0JrQvtC70LvQtdC00LYg0JvQsNC90LPQsNGA0LA!5e0!3m2!1sen!2sca!4v1714353826668!5m2!1sen!2sca"
                    width="95%"
                    height="95%"
                    className="rounded-md"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}