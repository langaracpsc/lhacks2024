"use client";
import { useEffect, useState } from "react";
import Image from 'next/image'

interface MiniEventsProps {
    miniEvents: any[][];
}

export default function MiniEvents({ miniEvents}: MiniEventsProps) {
    const [numItemsPerRow, setNumItemsPerRow] = useState(3); 
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1000) {
                setNumItemsPerRow(3);
            } else {
                setNumItemsPerRow(2);
            }
    
        };

        handleResize(); 

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const rows: any[][][] = [];
    for (let i = 0; i < miniEvents.length; i += numItemsPerRow) {
        rows.push(miniEvents.slice(i, i + numItemsPerRow));
    }

    return (
        <>
            {rows.map((row, rowIndex) => (
                <div className="flex flex-row space-between" key={rowIndex}>
                    {row.map((item, colIndex) => (
                        <div className="m-[0.1em] p-[1em] bg-zinc-800 rounded-md" key={colIndex}>
                            <Image 
                                src={item[2]}
                                className="w-[7em] h-[7em]"
                                alt="activityPicture"
                            />
                            <h2 className=" my-[0.5em] text-base font-bold">{item[0]}</h2>
                            <p className="text-sm">{item[1]}</p>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}