'use client';
import React from 'react';
import { animate, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure';
import Image from 'next/image';

export default function ExecMiniProfiles() {


    //need to move to public all pictures, dispose of require
    const people: any[][] = [
        ["Aaron Chen", "Lead Hackathon Director", require('../../../assets/images/square/aaron.jpg')],
        ["Ale", "Director of PR", require('../../../assets/images/square/ale.jpg')],
        ["Andrew Lee", "Director of Sponsorships", require('../../../assets/images/square/andrew.jpg')],
        ["Anderson Tseng", "President", require('../../../assets/images/square/andy.jpg')],
        ["April Ternida", "Director of Logistics", require('../../../assets/images/square/april.jpg')],
        ["Claire Nguyen", "Director of Media", require('../../../assets/images/square/claire.jpg')],
        ["Dennis Yong", "Sponsorships Coordinator", require('../../../assets/images/square/dennis.jpg')],
        ["Diego Delgado", "Sponsorships Coordinator", require('../../../assets/images/square/diego.jpg')],
        ["Felipe Barrosmoura", "Developer", require('../../../assets/images/square/andy.jpg')],
        ["Han Fu", "Logistics Coordinator", require('../../../assets/images/square/han.jpg')],
        ["Matthew Widjaja", "General Representative", require('../../../assets/images/square/matthew.jpg')],
        ["Mohit Saxena", "Vice President External", require('../../../assets/images/square/mohit.jpg')],
        ["Paul Michalski", "Tech Lead", require('../../../assets/images/square/paul.jpg')],
        ["Rishit Singh", "Tech Lead", require('../../../assets/images/square/rishit.jpg')],
        ["Saemi Park", "Vice President Internal", require('../../../assets/images/square/saemi.jpg')],
        ["Tyler Qiu", "Logistics Coordinator", require('../../../assets/images/square/tyler.jpg')],
    ];

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

    const [imagesWidth, setWidth] = useState<number>(25);

    // I changed scaling to 200% because of the quantity of elements
    useEffect(() => {
        setWidth(300 / people.length); // Adjust to 200% width
    }, [people]);

    let [ref, { width }] = useMeasure();
    const xTransition = useMotionValue(0);

    useEffect(() => {
        let control;
        let finalPosition = -width * 3; // Adjust for 200% width(multiply 100% by 2)

        control = animate(xTransition, [0, finalPosition], {
            ease: 'linear',
            duration: 40, // Adjust duration(change speed)
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        });

        return control.stop;
    }, [xTransition, width]);

    

    return (
        <>
            <motion.div ref={ref} className={`flex justify-between h-[10em] ${displayCheck ? 'w-[100%]' : 'w-[300%]'}`} style={{ x: xTransition }}>
                {[...people, ...people].map((exec, index) => (
                    <div key={index} className="flex-shrink-0 flex flex-col justify-center items-center h-full" style={{ width: `${imagesWidth}%` }}>
                        <div className="flex items-center justify-center h-[60%]">
                            <Image
                                src={exec[2]}
                                className="h-full w-fit rounded-full"
                                alt="activityPicture"
                                key={index}
                            />
                        </div>
                        <p className=''><b>{exec[0]}</b></p>
                        <p>{exec[1]}</p>
                    </div>
                ))}
            </motion.div>
        </>
    );
};






