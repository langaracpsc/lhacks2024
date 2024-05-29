'use client';
import React from 'react';
import { animate, motion } from 'framer-motion';
import { useEffect} from 'react';
import { useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure'
import Image from 'next/image';



export default function SponsorsLogosFooter () {
    const images: any[] = [require('./logoSample.jpg'), require('./logoSample.jpg'),require('./logoSample.jpg'),
    require('./logoSample.jpg'),require('./logoSample.jpg')];

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
            <motion.div ref={ref} className="flex justify-between w-[100%]" style={{x: xTransition}}>
                {[...images,...images].map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-[20%] h-[50px]">
                        <div className="flex items-center justify-center h-full">
                          <Image 
                                  src={image}
                                  className="h-full w-fit"
                                  alt="activityPicture"
                                  key={index}
                              />
                        </div>
                    </div>
                ))}
                
            </motion.div>
            
        </>
    );
};
