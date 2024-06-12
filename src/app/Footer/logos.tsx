'use client';




'use client';
import React from 'react';
import { animate, motion } from 'framer-motion';
import { useEffect} from 'react';
import { useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure'
import Image from 'next/image';
import IconToUse1 from "../Assets/icons8-facebook (1).svg"
import IconToUse2 from "../Assets/icons8-instagram (1).svg"
import IconTouse3 from "../Assets/icons8-tiktok (1).svg"
import IconToUse4 from "../Assets/icons8-snapchat.svg"
import IconToUse5 from "../Assets/icons8-twitterx.svg"
import iconToUse6 from "../Assets/icons8-youtube.svg"
import IconToUse7 from "../Assets/icons8-whatsapp.svg"



import imgAaron from '../../../assets/images/square/aaron.jpg';
import imgAle from '../../../assets/images/square/ale.jpg';
import imgAndrew from '../../../assets/images/square/andrew.jpg';
import imgAndy from '../../../assets/images/square/andy.jpg'; // Assuming 'andy.jpg' is for Anderson Tseng
import imgApril from '../../../assets/images/square/april.jpg';
import imgClaire from '../../../assets/images/square/claire.jpg';
import imgDennis from '../../../assets/images/square/dennis.jpg';
import imgDiego from '../../../assets/images/square/diego.jpg';
import imgFelipe from '../../../assets/images/square/andy.jpg'; // Assuming 'andy.jpg' is not for Felipe
import imgHan from '../../../assets/images/square/han.jpg';
import imgMatthew from '../../../assets/images/square/matthew.jpg';
import imgMohit from '../../../assets/images/square/mohit.jpg';
import imgPaul from '../../../assets/images/square/paul.jpg';
import imgRishit from '../../../assets/images/square/rishit.jpg';
import imgSaemi from '../../../assets/images/square/saemi.jpg';
import imgTyler from '../../../assets/images/square/tyler.jpg';



export default function ExecMiniProfiles(){

   
    const images: any[][] = [
        ["Aaron Chen", "Lead Hackathon Director", imgAaron],
        ["Ale", "Director of PR", imgAle],
        ["Andrew Lee", "Director of Sponsorships", imgAndrew],
        ["Anderson Tseng", "President", imgAndy],
        ["April Ternida", "Director of Logistics", imgApril],
        ["Claire Nguyen", "Director of Media", imgClaire],
        ["Dennis Yong", "Sponsorships Coordinator", imgDennis],
        ["Diego Delgado", "Sponsorships Coordinator", imgDiego],
        ["Felipe Barrosmoura", "Developer", imgFelipe],
        ["Han Fu", "Logistics Coordinator", imgHan],
        ["Matthew Widjaja", "General Representative", imgMatthew],
        ["Mohit Saxena", "Vice President External", imgMohit],
        ["Paul Michalski", "Tech Lead", imgPaul],
        ["Rishit Singh", "Tech Lead", imgRishit],
        ["Saemi Park", "Vice President Internal", imgSaemi],
        ["Tyler Qiu", "Logistics Coordinator", imgTyler],
      ];
    



    let [ref, {width}] = useMeasure();
    const xTransition = useMotionValue(0);

    useEffect(() =>{
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
                {[...images, ...images].map((exec, index) => (

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





