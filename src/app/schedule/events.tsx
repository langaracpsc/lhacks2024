import Image from 'next/image';
import activity_1 from "../../../assets/images/hackathon_activity_1.jpg"
import activity_2 from "../../../assets/images/hackathon_activity_2.jpg"

export default function Events() {
  return (
    <div className="flex flex-row items-baseline justify-center gap-8 w-11/12 pl-3 max-[900px]:flex-col max-[900px]:items-center">
      <div className="flex flex-col w-1/3 justify-between items-baseline h-max gap-6 max-[900px]:items-center max-[900px]:justify-center  max-[900px]:w-2/3">
        <h1 className="text-6xl max-[1088px]:text-4xl max-[716px]:text-3xl ">EVENTS</h1>
          <div className="flex flex-col gap-4 w-11/12">
            <Image src={activity_1} className="w-[10em=] rounded-md max-[900px]:w-[20em=]" alt="pre-hackathon briefing"/>
            {/* UNCOMMENT ME WHEN MORE ACTIVITIES ARE ADDED!!! */}
            {/* <Image src={activity_2} className="w-[10em=] rounded-md max-[900px]:w-[20em=]" alt="minigame during hackathon"/> */}
          </div>
      </div>

      <div className="flex flex-col w-2/3 justify-start items-baseline gap-5">
        <div className='w-11/12 border-b-4 border-orange-600'>
          <h2 className="text-2xl ">Workshops & Activities</h2>
        </div>
        <div className="p-4 w-11/12 bg-zinc-800 rounded-md">
          {/* <h2>Workshops TBD.</h2> */}
          <p>PRE-HACKATHON WORKSHOPS ARE NOW LIVE! Register now at <a href="https://lu.ma/lcsc">lu.ma/langaracpsc</a>!</p>
        </div>
        {/* <div className="p-4 w-11/12 bg-zinc-800 rounded-md">
          <h2>Workshops to be decided.</h2>
          <p>Date - TBD</p>
        </div>
        <div className="p-4 w-11/12 bg-zinc-800 rounded-md">
          <h2>Workshops to be decided.</h2>
          <p>Date - TBD</p>
        </div>
        <div className="p-4 w-11/12 bg-zinc-800 rounded-md">
          <h2>Workshops to be decided.</h2>
          <p>Date - TBD</p>
        </div>
        <div className="p-4 w-11/12 bg-zinc-800 rounded-md">
          <h2>Workshops to be decided.</h2>
          <p>Date - TBD</p>
        </div>
        <div className="p-4 w-11/12 bg-zinc-800 rounded-md">
          <h2>Workshops to be decided.</h2>
          <p>Date - TBD</p>
        </div> */}
      </div>
    </div>
  );
}
