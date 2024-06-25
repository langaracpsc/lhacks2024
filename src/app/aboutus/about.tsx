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
          <h2 className="text-2xl ">CODE IS LIFE.</h2>
        </div>
        <div className='w-11/12'>

          {/* THIS ALSO NEEDS TO BE REWRITTEN AS WELL */}
          <p className=" w-12/12 h-auto break-words text-lg max-w-prose text-justify">
            The Langara Computer Science Club is a
            student-run club dedicated to providing a space for students
            interested in computer science at Langara to learn, network, help each
            other out, and have fun! We host a variety of events, ranging from workshops 
            to social events to this hackathon!
          </p>
          <br />

          {/* 
          BE VERY CAREFUL WHEN WRITING COPY

          AS MUCH AS I AGREE WITH THE SENTIMENT, THIS IS REALLY NOT THE MISSION OF THE CLUB
          OR EVEN ONE OF THE MAIN REASONS FOR ORGANIZING A HACKATHON
         */}

          <p className=" w-12/12 h-auto break-words text-lg max-w-prose text-justify">
            Our mission is to make programming a fun activity, like it was for all
            of us when we started. Like the way it should be.
          </p>
          <br />

          <p className="w-12/12 h-auto break-words text-lg max-w-prose text-justify">
            We won&apos;t preach books or articles to you, rather, we make mistakes. We
            reinvent the wheel, going to extreme lengths just to find out how
            something really works.
          </p>
          <br />

          <p className=" w-12/12 h-auto break-words text-lg max-w-prose text-justify">
            Bring a learning mindset and we can make
            something truly unique and amazing.
          </p>
        </div>
      </div>
    </div>
  );
}
