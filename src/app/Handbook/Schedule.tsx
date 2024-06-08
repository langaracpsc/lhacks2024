
import React from 'react';
interface ScheduleProps {
    dayNum: number;
    dayEvents: string[][];
}

export default function Schedule({ dayEvents, dayNum }: ScheduleProps) {
    return (
        <div className="1vw my-5">
            <h1 className="text-xl font-bold">Day {dayNum}</h1>
            <div className="overflow-y-scroll h-[50vh]">
                {
                    dayEvents.map((dayEvent, index) => (
                        <div key={index} className="scheduleEventInfo flex flex-col bg-zinc-800 p-[1em] mb-[0.5em] rounded-md">
                            <h4>{dayEvent[0]}</h4>
                            <p style={{ color: "rgb(241, 90, 34)" }} className="flex overflow-x-hidden">{dayEvent[1]}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
