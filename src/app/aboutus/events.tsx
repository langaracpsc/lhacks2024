import Image from 'next/image';

export default function Events() {
  return (
    <div className="flex flex-row items-baseline justify-center gap-8 p-14  max-[900px]:flex-col max-[900px]:items-center">
      <div className="flex flex-col w-1/3 justify-between items-baseline h-max gap-6 max-[900px]:items-center max-[900px]:justify-center  max-[900px]:w-2/3">
        <h1 className="text-6xl max-[1088px]:text-4xl max-[716px]:text-3xl ">EVENTS</h1>
          <div className="flex flex-col gap-4 w-11/12">
            <Image src={require("../images/group1.jpg")} className="w-[10em=] rounded-md max-[900px]:w-[20em=]" alt="aboutUsPhoto"/>
            <Image src={require("../images/group2.jpg")} className="w-[10em=] rounded-md max-[900px]:w-[20em=]" alt="aboutUsPhoto"/>
          </div>
      </div>

      <div className="flex flex-col w-2/3 justify-start items-baseline gap-5">
        <div className='w-11/12 border-b-4 border-orange-600'>
          <h2 className="text-2xl ">MEET UP. CREATE TOGETHER.</h2>
        </div>
        <div className="p-4 w-11/12 bg-zinc-800 rounded-md">
          <h2>Tech Talk: Why Java sucks.</h2>
          <p>24th February, 2024; 6:00 PM, Langara Campus</p>
        </div>
        <div className="p-4 w-11/12 bg-zinc-800 rounded-md">
          <h2>Tech Talk: Why Java sucks.</h2>
          <p>24th February, 2024; 6:00 PM, Langara Campus</p>
        </div>
        <div className="p-4 w-11/12 bg-zinc-800 rounded-md">
          <h2>Tech Talk: Why Java sucks.</h2>
          <p>24th February, 2024; 6:00 PM, Langara Campus</p>
        </div>
        <div className="p-4 w-11/12 bg-zinc-800 rounded-md">
          <h2>Tech Talk: Why Java sucks.</h2>
          <p>24th February, 2024; 6:00 PM, Langara Campus</p>
        </div>
        <div className="p-4 w-11/12 bg-zinc-800 rounded-md">
          <h2>Tech Talk: Why Java sucks.</h2>
          <p>24th February, 2024; 6:00 PM, Langara Campus</p>
        </div>
        <div className="p-4 w-11/12 bg-zinc-800 rounded-md">
          <h2>Tech Talk: Why Java sucks.</h2>
          <p>24th February, 2024; 6:00 PM, Langara Campus</p>
        </div>
      </div>
    </div>
  );
}
