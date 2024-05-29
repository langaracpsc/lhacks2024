import Image from 'next/image'

export default function About() {
  return (
  <div className="flex flex-row items-baseline w-screen justify-center gap-8 p-14  max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-8  ">
      <div className="flex flex-col w-1/3 justify-start items-baseline h-96 gap-6 max-[900px]:h-fit max-[900px]:items-center max-[900px]:justify-center  max-[900px]:w-2/3">
        <h1 className="text-6xl max-[1088px]:text-4xl max-[716px]:text-3xl w-max ">ABOUT US</h1>
        <Image src={require("../images/group2023.jpg")} className="w-[10em=] rounded-md max-[900px]:w-[20em=]" alt="aboutUsPhoto" />
        

      </div>

      <div className="flex flex-col w-2/3 justify-center items-start gap-4 max-[900px]:w-11/12 h-max">
        <div className='w-11/12 border-b-4 border-orange-600'>
          <h2 className="text-2xl ">CODE IS LIFE.</h2>
        </div>
        <div  className='w-11/12'>
          <p className=" w-12/12 h-auto break-words text-lg max-w-prose text-justify">
            The Langara Computer Science Club is officially back! We are a
            student-run club dedicated to providing a space for students
            interested in computer science at Langara to learn, network, help each
            other out, and have fun! This year, we paln to host workshops,
            programming competitions, and meetups
          </p>
          <br />
         
          <p className=" w-12/12 h-auto break-words text-lg max-w-prose text-justify">
            Our mission is to make programming a fun activity, like it was for all
            of us when we started. Like the way it should be.
          </p>
          <br />
          
          <p className="w-12/12 h-auto break-words text-lg max-w-prose text-justify">
            We won't preach books or articles to you, rather, we make mistakes. We
            reinvent the wheel, going to extreme lengths just to find out how
            something really works
          </p>
          <br />
          
          <p className=" w-12/12 h-auto break-words text-lg max-w-prose text-justify">
            So yeah, join us with a learning mindset and who knows, we might make
            something truly unique and amazing.
          </p>
        </div>
      </div>
    </div>
  );
}
