import Image from 'next/image'
import aboutImage from "../../../assets/images/group2023.jpg"

export default function About() {
  return (
    <div className="flex flex-row items-baseline justify-center gap-8 p-14  max-[900px]:flex-col max-[900px]:items-center ">
      <div className="flex flex-col w-1/3 justify-start items-baseline h-96 gap-6 max-[900px]:h-fit max-[900px]:items-center max-[900px]:justify-center  max-[900px]:w-2/3">
        <h1 className="text-6xl max-[1088px]:text-4xl max-[716px]:text-3xl w-max ">ABOUT US</h1>
        <Image src={aboutImage} className="w-[10em=] rounded-md max-[900px]:w-[20em=]" alt="aboutUsPhoto" />
      </div>

      <div className="flex flex-col w-2/3 justify-center items-start gap-4 max-[900px]:w-11/12 h-max">
        <div className='w-11/12 border-b-4 border-orange-600'>
          <h2 className="text-2xl ">PUSHING THE BOUNDARIES OF LANGARA.</h2>
        </div>
        <div className='w-11/12'>

          {/* THIS ALSO NEEDS TO BE REWRITTEN AS WELL */}
          <p className=" w-12/12 h-auto break-words text-lg max-w-prose text-justify">
            The Langara Computer Science Club is a
            student-run club dedicated to providing a space for students
            interested in computer science at Langara to learn, network, and to help each
            other out. We host a variety of events, ranging from workshops 
            to social events to this hackathon.
          </p>
          <br />

          {/* 
          BE VERY CAREFUL WHEN WRITING COPY

          AS MUCH AS I AGREE WITH THE SENTIMENT, THIS IS REALLY NOT THE MISSION OF THE CLUB
          OR EVEN ONE OF THE MAIN REASONS FOR ORGANIZING A HACKATHON
         */}

          <p className=" w-12/12 h-auto break-words text-lg max-w-prose">
            Our mission is to create a space where anyone can build and create, no matter your skill level or experience.
          </p>
          <br />

          <p className="w-12/12 h-auto break-words text-lg max-w-prose">
            Just because we are a transfer college doesn&apos;t mean that our opportunities
            should be limited. 
            
            This hackathon is an opportunity for you to learn, grow, and to create a project that's worth so much more than just a grade.
          </p>
          <br />

          <p className=" w-12/12 h-auto break-words text-lg max-w-prose">
            Join us on <a className="text-orange-500" href="https://discord.gg/langara-computer-science-club-753037165050593300" target="_blank">discord</a> and <a className="text-orange-500" href="https://www.instagram.com/langaracpsc/" target="_blank">instagram</a> or at any of our club events.
          </p>

          <p className=" w-12/12 h-auto break-words text-lg max-w-prose">
            Together we can make something truly unique and amazing.
          </p>
        </div>
      </div>
    </div>
  );
}
