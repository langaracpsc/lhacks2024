import Image from 'next/image';

export default function Execs() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="m-8">
        <h1 className="text-6xl text-center">OUR EXECS</h1>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/andy.jpg")} className="w-full rounded-md" alt="Anderson Tseng" />
          <h1 className="text-2xl text-center mt-2">Anderson Tseng</h1>
          <h2 className="text-center">President</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/mohit.jpg")} className="w-full rounded-md" alt="Mohit Saxena" />
          <h1 className="text-2xl text-center mt-2">Mohit Saxena</h1>
          <h2 className="text-center">Vice President - External</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/saemi.jpg")} className="w-full rounded-md" alt="Saemi Park" />
          <h1 className="text-2xl text-center mt-2">Saemi Park</h1>
          <h2 className="text-center">Vice President - Internal</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/aaron.jpg")} className="w-full rounded-md" alt="Aaron Chen" />
          <h1 className="text-2xl text-center mt-2">Aaron Chen</h1>
          <h2 className="text-center">Lead Hackathon Coordiantor</h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
      <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/rishit.jpg")} className="w-full rounded-md" alt="Rishit Singh" />
          <h1 className="text-2xl text-center mt-2">Rishit Singh</h1>
          <h2 className="text-center">Tech Lead</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/paul.jpg")} className="w-full rounded-md" alt="Paul Michalski" />
          <h1 className="text-2xl text-center mt-2">Paul Michalski</h1>
          <h2 className="text-center">Tech Lead</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/dennis.jpg")} className="w-full rounded-md" alt="Dennis Yong" />
          <h1 className="text-2xl text-center mt-2">Dennis Yong</h1>
          <h2 className="text-center">Developer</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/andy.jpg")} className="w-full rounded-md" alt="Felipe Barrosmoura" />
          <h1 className="text-2xl text-center mt-2">Felipe Barrosmoura</h1>
          <h2 className="text-center">Developer</h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
      <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/andrew.jpg")} className="w-full rounded-md" alt="Andrew Lee" />
          <h1 className="text-2xl text-center mt-2">Andrew Lee</h1>
          <h2 className="text-center">Director of Events</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/april.jpg")} className="w-full rounded-md" alt="April Ternida" />
          <h1 className="text-2xl text-center mt-2">April Ternida</h1>
          <h2 className="text-center">Director of Events</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/han.jpg")} className="w-full rounded-md" alt="Han Fu" />
          <h1 className="text-2xl text-center mt-2">Han Fu</h1>
          <h2 className="text-center">Director of Events</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/tyler.jpg")} className="w-full rounded-md" alt="Tyler Qiu" />
          <h1 className="text-2xl text-center mt-2">Tyler Qiu</h1>
          <h2 className="text-center">Director of Events</h2>
        </div>
        
      </div>
      <div className="flex flex-wrap justify-center">
      <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/ale.jpg")} className="w-full rounded-md" alt="Ale" />
          <h1 className="text-2xl text-center mt-2">Alejandra Arce</h1>
          <h2 className="text-center">Director of PR</h2>
        </div>  
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/claire.jpg")} className="w-full rounded-md" alt="Claire Nguyen" />
          <h1 className="text-2xl text-center mt-2">Claire Nguyen</h1>
          <h2 className="text-center">Director of Media</h2>
        </div>  
      <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/matthew.jpg")} className="w-full rounded-md" alt="Matthew " />
          <h1 className="text-2xl text-center mt-2">Matthew Widjaja</h1>
          <h2 className="text-center">General Representative</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={require("../images/diego.jpg")} className="w-full rounded-md" alt="Diego Delgado" />
          <h1 className="text-2xl text-center mt-2">Diego Delgado</h1>
          <h2 className="text-center">General Representative</h2>
        </div>
      </div>
    </div>
  );
}