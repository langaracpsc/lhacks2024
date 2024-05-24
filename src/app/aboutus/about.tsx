import Image from 'next/image'

export default function About() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-1/3 m-12">
        <h1 className="text-6xl mb-12">ABOUT US</h1>
        <div className="h-full rounded-md ">
          <Image src={require("../images/group2023.jpg")} className="w-[10em=] rounded-md" alt="aboutUsPhoto"/>
        </div>
        
      </div>

      <div className="flex flex-col w-2/3 m-8">
        <h2 className="text-2xl border-b-4 border-orange-600 m-8">CODE IS LIFE.</h2>
        <p className="ml-8 mr-8 mt-4">
          The Langara Computer Science Club is officially back! We are a
          student-run club dedicated to providing a space for students
          interested in computer science at Langara to learn, network, help each
          other out, and have fun! This year, we paln to host workshops,
          programming competitions, and meetups
        </p>
        <p className="ml-8 mr-8 mt-4">
          Our mission is to make programming a fun activity, like it was for all
          of us when we started. Like the way it should be.
        </p>
        <p className="ml-8 mr-8 mt-4">
          We won't preach books or articles to you, rather, we make mistakes. We
          reinvent the wheel, going to extreme lengths just to find out how
          something really works
        </p>
        <p className="ml-8 mr-8 mt-4">
          So yeah, join us with a learning mindset and who knows, we might make
          something truly unique and amazing.
        </p>
      </div>
    </div>
  );
}
