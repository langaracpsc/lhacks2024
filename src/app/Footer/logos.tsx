'use client';
import React from 'react';
import { animate, motion } from 'framer-motion';
import { useEffect} from 'react';
import { useMotionValue } from 'framer-motion';
import useMeasure from 'react-use-measure'
import Image, { StaticImageData } from 'next/image';

import imgAaron from '../../../assets/images/square/aaron.jpg';
import imgAle from '../../../assets/images/square/ale.jpg';
import imgAndrew from '../../../assets/images/square/andrew.jpg';
import imgAndy from '../../../assets/images/square/andy.jpg'; // Assuming 'andy.jpg' is for Anderson Tseng
import imgApril from '../../../assets/images/square/april.jpg';
import imgClaire from '../../../assets/images/square/claire.jpg';
import imgDennis from '../../../assets/images/square/dennis.jpg';
import imgDiego from '../../../assets/images/square/diego.jpg';
import imgFelipe from '../../../assets/images/square/Felipe.jpg'; // Assuming 'andy.jpg' is not for Felipe
import imgHan from '../../../assets/images/square/han.jpg';
import imgMatthew from '../../../assets/images/square/matthew.jpg';
import imgMohit from '../../../assets/images/square/mohit.jpg';
import imgPaul from '../../../assets/images/square/paul.jpg';
import imgRishit from '../../../assets/images/square/rishit.jpg';
import imgSaemi from '../../../assets/images/square/saemi.jpg';
import imgTyler from '../../../assets/images/square/tyler.jpg';

interface Executives{
    name:string
    role:string
    image:StaticImageData
}


export default function SponsorsLogosFooter () {

    // const images: any[] = [require('./logoSample.jpg'), require('./logoSample.jpg'),require('./logoSample.jpg'),
    // require('./logoSample.jpg'),require('./logoSample.jpg')];

    const images: Executives[] = [
        { name: "Aaron Chen", role: "Lead Hackathon Director", image: imgAaron },
        { name: "Ale", role: "Director of PR", image: imgAle },
        { name: "Andrew Lee", role: "Director of Sponsorships", image: imgAndrew },
        { name: "Anderson Tseng", role: "President", image: imgAndy },
        { name: "April Ternida", role: "Director of Logistics", image: imgApril },
        { name: "Claire Nguyen", role: "Director of Media", image: imgClaire },
        { name: "Dennis Yong", role: "Sponsorships Coordinator", image: imgDennis },
        { name: "Diego Delgado", role: "Sponsorships Coordinator", image: imgDiego },
        { name: "Felipe Barros Moura", role: "Developer", image: imgFelipe },
        { name: "Han Fu", role: "Logistics Coordinator", image: imgHan },
        { name: "Matthew Widjaja", role: "General Representative", image: imgMatthew },
        { name: "Mohit Saxena", role: "Vice President External", image: imgMohit },
        { name: "Paul Michalski", role: "Tech Lead", image: imgPaul },
        { name: "Rishit Singh", role: "Tech Lead", image: imgRishit },
        { name: "Saemi Park", role: "Vice President Internal", image: imgSaemi },
        { name: "Tyler Qiu", role: "Logistics Coordinator", image: imgTyler },
      ];

    let [ref, {width}] = useMeasure();
    const xTransition = useMotionValue(0);

    useEffect(() =>{
      let control;
      let finalPosition = -width

      control = animate(xTransition, [0, finalPosition], {
        ease: 'linear',
        duration: 20,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0
      })

      return control.stop;
    }, [xTransition, width])
    return (
        <>
            <motion.div ref={ref} className="flex justify-between w-[100%] items-center  h-40" style={{x: xTransition}}>
                {[...images,...images].map((image, index) => (
                   
                    <div key={index} className="flex-shrink-0 w-[5%] h-[50px]">
                        <div className="flex items-center justify-center h-full flex-col gap-3">
                          <Image 
                                  src={image.image}
                                  className="h-[100px] w-fit  rounded-full"
                                  alt="activityPicture"
                                  key={index}
                              />
                               <p className=' font-bold text-lg w-fit'>{image.name}</p>
                               <p className='text-md w-fit'>{image.role}</p>
                               
                           
                        </div>
                        
                    </div>
                    

               
                ))}
                
            </motion.div>
            
        </>
    );
};


// 'use client';
// import React from 'react';
// import { animate, motion } from 'framer-motion';
// import { useEffect} from 'react';
// import { useMotionValue } from 'framer-motion';
// import useMeasure from 'react-use-measure'
// import Image from 'next/image';



// export default function SponsorsLogosFooter () {
//     const images: any[] = [require('./logoSample.jpg'), require('./logoSample.jpg'),require('./logoSample.jpg'),
//     require('./logoSample.jpg'),require('./logoSample.jpg')];

//     let [ref, {width}] = useMeasure();
//     const xTransition = useMotionValue(0);

//     useEffect(() =>{
//       let control;
//       let finalPosition = -width

//       control = animate(xTransition, [0, finalPosition], {
//         ease: 'linear',
//         duration: 10,
//         repeat: Infinity,
//         repeatType: 'loop',
//         repeatDelay: 0
//       })

//       return control.stop;
//     }, [xTransition, width])
//     return (
//         <>
//             <motion.div ref={ref} className="flex justify-between w-[100%]" style={{x: xTransition}}>
//                 {[...images,...images].map((image, index) => (
//                     <div key={index} className="flex-shrink-0 w-[20%] h-[50px]">
//                         <div className="flex items-center justify-center h-full">
//                           <Image 
//                                   src={image}
//                                   className="h-full w-fit"
//                                   alt="activityPicture"
//                                   key={index}
//                               />
//                         </div>
//                     </div>
//                 ))}
                
//             </motion.div>
            
//         </>
//     );
// };






