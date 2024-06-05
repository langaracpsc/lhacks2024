'use client';
import React from 'react';
import { animate, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure'
import Image from 'next/image';



export default function ExecMiniProfiles() {

    // WHY CANT I JUST ADD THIS?
    const fl = "../../../assets/images/square/"

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
    ]

    let [ref, { width }] = useMeasure();
    const xTransition = useMotionValue(0);

    useEffect(() => {
        let control;
        let finalPosition = -width

        control = animate(xTransition, [0, finalPosition], {
            ease: 'linear',
            duration: 10,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0
        })

        return control.stop;
    }, [xTransition, width])
    return (
        <>
            <motion.div ref={ref} className="gap-5 flex justify-between w-[100%] h-full" style={{ x: xTransition }}>
                {[...people, ...people].map((exec, index) => (

                    <div key={index} className="w-[190px] z flex-col flex items-center justify-center shrink-0">

                        <div className="">
                            <Image
                                src={exec[2]}
                                alt="activityPicture"
                                className="w-[75px] object-contain rounded-full"
                                key={index}
                            />
                        </div>

                        <p><b>{exec[0]}</b></p>
                        <p>{exec[1]}</p>
                    </div>
                ))}

            </motion.div>

        </>
    );
};
