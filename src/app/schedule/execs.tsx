import Image from 'next/image';


import andersonTseng from "../../../assets/images/andy.jpg"; // New static import
import mohitSaxena from "../../../assets/images/mohit.jpg"; // New static import
import saemiPark from "../../../assets/images/saemi.jpg"; // New static import
import aaronChen from "../../../assets/images/aaron.jpg"; // New static import
import rishitSingh from "../../../assets/images/rishit.jpg"; // New static import
import paulMichalski from "../../../assets/images/paul.jpg"; // New static import
import dennisYong from "../../../assets/images/dennis.jpg"; // New static import
import felipeBarrosmoura from "../../../assets/images/andrew.jpg"; // New static import
import andrewLee from "../../../assets/images/andrew.jpg"; // New static import
import aprilTernida from "../../../assets/images/april.jpg"; // New static import
import hanFu from "../../../assets/images/han.jpg"; // New static import
import tylerQiu from "../../../assets/images/tyler.jpg"; // New static import
import alejandraArce from "../../../assets/images/ale.jpg"; // New static import
import claireNguyen from "../../../assets/images/claire.jpg"; // New static import
import matthewWidjaja from "../../../assets/images/matthew.jpg"; // New static import
import diegoDelgado from "../../../assets/images/diego.jpg"; // New static import


export default function Execs() {
  return (
    <div className="flex flex-col items-center justify-center w-100">
      <div className=' mb-8'>
        <h1 className="text-6xl max-[1088px]:text-4xl max-[716px]:text-3xl">OUR EXECS</h1>
      </div>

      <div className="flex flex-wrap justify-center max-[900px]:w-9/12 ">
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={andersonTseng} className="w-full rounded-md  h-64" alt="Anderson Tseng" />
          <h1 className="text-2xl text-center mt-2">Anderson Tseng</h1>
          <h2 className="text-center">President</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={mohitSaxena} className="w-full rounded-md h-64" alt="Mohit Saxena" />
          <h1 className="text-2xl text-center mt-2">Mohit Saxena</h1>
          <h2 className="text-center">Vice President - External</h2>
        </div>
        
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={saemiPark} className="w-full rounded-md h-64" alt="Saemi Park" />
          <h1 className="text-2xl text-center mt-2">Saemi Park</h1>
          <h2 className="text-center">Vice President - Internal</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={aaronChen} className="w-full rounded-md h-64" alt="Aaron Chen" />
          <h1 className="text-2xl text-center mt-2">Aaron Chen</h1>
          <h2 className="text-center">Lead Hackathon Coordiantor</h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-center max-[900px]:w-9/12">
      <div className="flex flex-col items-center w-48 m-4">
          <Image src={rishitSingh} className="w-full rounded-md" alt="Rishit Singh" />
          <h1 className="text-2xl text-center mt-2">Rishit Singh</h1>
          <h2 className="text-center">Tech Lead</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={paulMichalski} className="w-full rounded-md" alt="Paul Michalski" />
          <h1 className="text-2xl text-center mt-2">Paul Michalski</h1>
          <h2 className="text-center">Tech Lead</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={dennisYong} className="w-full rounded-md" alt="Dennis Yong" />
          <h1 className="text-2xl text-center mt-2">Dennis Yong</h1>
          <h2 className="text-center">Developer</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={felipeBarrosmoura} className="w-full rounded-md" alt="Felipe Barrosmoura" />
          <h1 className="text-2xl text-center mt-2">Felipe Barros Moura</h1>
          <h2 className="text-center">Developer</h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-center max-[900px]:w-9/12">
      <div className="flex flex-col items-center w-48 m-4">
          <Image src={andrewLee} className="w-full rounded-md" alt="Andrew Lee" />
          <h1 className="text-2xl text-center mt-2">Andrew Lee</h1>
          <h2 className="text-center">Director of Events</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={aprilTernida} className="w-full rounded-md" alt="April Ternida" />
          <h1 className="text-2xl text-center mt-2">April Ternida</h1>
          <h2 className="text-center">Director of Events</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={hanFu} className="w-full rounded-md" alt="Han Fu" />
          <h1 className="text-2xl text-center mt-2">Han Fu</h1>
          <h2 className="text-center">Director of Events</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={tylerQiu} className="w-full rounded-md" alt="Tyler Qiu" />
          <h1 className="text-2xl text-center mt-2">Tyler Qiu</h1>
          <h2 className="text-center">Director of Events</h2>
        </div>
        
      </div>
      <div className="flex flex-wrap justify-center max-[900px]:w-9/12">
      <div className="flex flex-col items-center w-48 m-4">
          <Image src={alejandraArce} className="w-full rounded-md" alt="Ale" />
          <h1 className="text-2xl text-center mt-2">Alejandra Arce</h1>
          <h2 className="text-center">Director of PR</h2>
        </div>  
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={claireNguyen} className="w-full rounded-md" alt="Claire Nguyen" />
          <h1 className="text-2xl text-center mt-2">Claire Nguyen</h1>
          <h2 className="text-center">Director of Media</h2>
        </div>  
      <div className="flex flex-col items-center w-48 m-4">
          <Image src={matthewWidjaja} className="w-full rounded-md" alt="Matthew " />
          <h1 className="text-2xl text-center mt-2">Matthew Widjaja</h1>
          <h2 className="text-center">General Representative</h2>
        </div>
        <div className="flex flex-col items-center w-48 m-4">
          <Image src={diegoDelgado} className="w-full rounded-md" alt="Diego Delgado" />
          <h1 className="text-2xl text-center mt-2">Diego Delgado</h1>
          <h2 className="text-center">General Representative</h2>
        </div>
      </div>
    </div>
  );
}