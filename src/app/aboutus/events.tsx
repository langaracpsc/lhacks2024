import Image from 'next/image';

export default function Events() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-1/3 m-12">
        <h1 className="text-6xl mb-12">EVENTS</h1>
        <div className="h-full rounded-md">
          <div className="flex flex-col">
            <Image src={require("../images/group1.jpg")} className="w-full rounded-md" alt="aboutUsPhoto"/>
            <Image src={require("../images/group2.jpg")} className="w-full rounded-md" alt="aboutUsPhoto"/>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-2/3 m-8">
        <h2 className="text-2xl border-b-4 border-orange-600 m-8">
            MEET UP. CREATE TOGETHER.
        </h2>
        <div className="p-4 ml-8 mr-8 mt-4 bg-zinc-800 rounded-md">
          <h2>Tech Talk: Why Java sucks.</h2>
          <p>24th February, 2024; 6:00 PM, Langara Campus</p>
        </div>
        <div className="p-4 ml-8 mr-8 mt-4 bg-zinc-800 rounded-md">
          <h2>Tech Talk: Why Java sucks.</h2>
          <p>24th February, 2024; 6:00 PM, Langara Campus</p>
        </div>
        <div className="p-4 ml-8 mr-8 mt-4 bg-zinc-800 rounded-md">
          <h2>Tech Talk: Why Java sucks.</h2>
          <p>24th February, 2024; 6:00 PM, Langara Campus</p>
        </div>
        <div className="p-4 ml-8 mr-8 mt-4 bg-zinc-800 rounded-md">
          <h2>Tech Talk: Why Java sucks.</h2>
          <p>24th February, 2024; 6:00 PM, Langara Campus</p>
        </div>
        <div className="p-4 ml-8 mr-8 mt-4 bg-zinc-800 rounded-md">
          <h2>Tech Talk: Why Java sucks.</h2>
          <p>24th February, 2024; 6:00 PM, Langara Campus</p>
        </div>
        <div className="p-4 ml-8 mr-8 mt-4 bg-zinc-800 rounded-md">
          <h2>Tech Talk: Why Java sucks.</h2>
          <p>24th February, 2024; 6:00 PM, Langara Campus</p>
        </div>
      </div>
    </div>
  );
}
