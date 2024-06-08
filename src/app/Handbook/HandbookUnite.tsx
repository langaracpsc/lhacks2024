import Schedule from "./Schedule";
import Location from "./Location";
import Awards from "./Awards";
import MiniEvents from "./MiniEvents";

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
        ["Event 1", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ", require('./images/event1icon.svg')],
        ["Event 2", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ", require('./images/event2icon.svg')],
        ["Event 3", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ", require('./images/event3icon.svg')],
        ["Event 4", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ", require('./images/event4icon.svg')],
        ["Event 5", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ", require('./images/event5icon.svg')],
        ["Event 6", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ", require('./images/event6icon.svg')]];



    return (
        <div className="flex flex-col items-center box-border my-[2em]">
            
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

            <Location></Location>


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