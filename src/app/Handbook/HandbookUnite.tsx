
import eventIcon1 from './images/event1icon.svg';
import eventIcon2 from './images/event2icon.svg';
import eventIcon3 from './images/event3icon.svg';
import eventIcon4 from './images/event4icon.svg';
import eventIcon5 from './images/event5icon.svg';
import eventIcon6 from './images/event6icon.svg';

import Location from './Location'; // prone to the weird casing bug



export default function HandbookUnite() {
    let day1Events: string[][] = [
        ["Registration Begins", "8:00"],
        ["Registration Ends", "10:00"],
        ["Lunch time", "12:00"], ["Registration Begins", "8:00"],
        ["Registration Ends", "10:00"],
        ["Lunch time", "12:00"], ["Registration Begins", "8:00"],
        ["Registration Ends", "10:00"],
        ["Lunch time", "12:00"]];

    let day2Events: string[][] = [];

    let awards: string[][][] = [
        [
            ["First Place", "Prizes TBD."],
            ["Second Place", "Prizes TBD."]
        ],[
            ["Judge Favourite", "Prizes TBD."],
            ["Audience Favourite", "Prizes TBD."]
        ]
    ]

    let miniEvent: any[][] = [
        ["Event 1", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ", eventIcon1],
        ["Event 2", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ", eventIcon2],
        ["Event 3", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ", eventIcon3],
        ["Event 4", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ", eventIcon4],
        ["Event 5", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ", eventIcon5],
        ["Event 6", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ", eventIcon6],
      ];

    return (
        <div className="flex flex-row items-center justify-center w-screen ">
            
            {/* 

            IF YOU NEED THIS LATER YOU CAN UNCOMMENT IT 
            FOR NOW SCHEDULE ISNT CONFIRMED (the component is quite clean though)
            having such a big scrolling area in the center of the screen is an anti-pattern,
            I would suggest just making it full height 
            put day 1 and 2's schedules side to side if neccessary
            */}

            {/* <div className="flex flex-col items-center my-10">
                <h1 className="text-4xl">Hackathon Schedule</h1>
                <div className="flex flex-col flex-left w-[90vw]">
                    <Schedule
                        dayEvents={day1Events}
                        dayNum={1}></Schedule>

                    <Schedule
                        dayEvents={day1Events}
                        dayNum={2}></Schedule>

                </div>
            </div> */}

            <Location/>


            {/* IF YOU WANT TO USE THIS COMPONENT THEN YOU NEED TO FIX THE CSS AND CONFIRM PRIZE TRACKS WITH LOGISTICS */}
            
            {/* <div className="flex flex-col items-center w-[80vw] my-10">
                <h1 className="text-4xl">Prize Tracks</h1>
                <Awards awards={awards}></Awards>
            </div> */}
            
            {/* AGAIN. THIS CANT BE PUT ON THE WEBSITE UNLESS YOU ASK LOGISTICS WHAT MINI EVENTS THERE WILL BE */}
            {/* <div className="flex flex-col items-center w-[80vw] my-10">
                <h1 className="text-4xl mb-[1em]">Mini Events</h1>
                <MiniEvents miniEvents={miniEvent}></MiniEvents>
            </div> */}



            {/* 
            THE FOLLOWING INFORMATION SHOULD PROBABLY BE IN THE HACKERS PRE-HACKATHON PACKAGE
            THIS INFORMATION DOESNT NEED TO BE ON THE WEBSITE
            */}

            {/* 
            <div className="flex flex-col items-center w-[80vw] my-10">
                <h1 className="text-4xl mb-[1em]">Submissions</h1>
                <p className="text-justify">Projects will be submitted on the Langara Hacks Devpost. Be sure to submit your project there and nominate yourself for theh awards you qualify for before judging begins at 6:00pm. Also be sure to check out other people’s submissions.</p>
            </div>


            <div className="flex flex-col items-center w-[80vw] my-10">
                <h1 className="text-4xl mb-[1em]">Meals</h1>
                <p className="text-justify">Projects will be submitted on the Langara Hacks Devpost. Be sure to submit your project there and nominate yourself for theh awards you qualify for before judging begins at 6:00pm. Also be sure to check out other people’s submissions.</p>
            </div>


            <div className="flex flex-col items-center w-[80vw] my-10">
                <h1 className="text-4xl mb-[1em] text-center">Presentations and Judging</h1>
                <p className="text-justify">Projects will be submitted on the Langara Hacks Devpost. Be sure to submit your project there and nominate yourself for theh awards you qualify for before judging begins at 6:00pm. Also be sure to check out other people’s submissions.</p>
            </div> */}

        </div>
    )
}