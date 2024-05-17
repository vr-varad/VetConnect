import React, { useEffect, useState } from "react";
import doc1 from "../assets/doctor1.png";
import doc2 from "../assets/doctor2.png";
import doc3 from "../assets/doctor3.png";
import doc4 from "../assets/doctor4.png";
import Slideshow from "../utils/Slideshow";
import {useNavigate} from 'react-router-dom'

const Body = () => {
  const imageUrl = [doc1, doc2, doc3, doc4];
  const [currentImage, setCurrentImage] = useState(0);
  const navigate  = useNavigate()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageUrl.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  

  return (
    <div className="">
      <div className="flex lg:flex-row flex-col justify-evenly items-center align-baseline bg-blue-600">
        <div className="lg:max-w-[30vw] text-center py-20">
          <h1 className="font-bold font-mono lg:text-7xl text-center text-5xl text-white">
            Book Your Vets Appointment Online.
          </h1>
          <p className="text-white font-mono lg:text-xl text-md">
            Make vet appointments a breeze with our simple and convenient online
            booking system.
          </p>
          <button onClick={()=>{navigate('/book')}} className="bg-white font-mono text-blue-600 py-4 px-10 rounded-lg hover:bg-blue-950 hover:text-white">
            Book An Appointment Now!!
          </button>
        </div>
        <div className="top-right">
          <img
            src={imageUrl[currentImage]}
            alt="Doctor"
            className="flex justify-center items-center h-[500px]"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center pt-14 pb-20">
        <div className="">
          <h1 className="font-bold text-5xl font-mono">How it works!!</h1>
          <p className="font-light md:max-w-[50vw] text-md font-mono">
            Easily find a trusted veterinarian, book your appointment online,
            and receive top-notch care for your pet. Enjoy hassle-free
            scheduling and personalized follow-up for a seamless experience.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap -10 items-center lg:gap-40">
          <div className="md:max-w-36">
            <i class="fa-solid fa-user-doctor fa-2x"></i>
            <h2 className="my-2 font-mono text-1xl font-semibold">
              Find a Doctor
            </h2>
            <p className="text-[0.8rem] font-mono">
              Discover certified veterinarians near you with ease.
            </p>
          </div>
          <div className="md:max-w-36">
            <i class="fa-solid fa-calendar-days fa-2x"></i>
            <h2 className="my-2 font-mono text-1xl font-semibold">
              Get an Appointment
            </h2>
            <p className="text-[0.8rem] font-mono">
              Schedule your pet's appointment online effortlessly.
            </p>
          </div>
          <div className="md:max-w-36">
            <i class="fa-solid fa-suitcase-medical fa-2x"></i>
            <h2 className="my-2 font-mono text-1xl font-semibold">
              Get Service
            </h2>
            <p className="text-[0.8rem] font-mono">
              Receive expert care and personalized attention for your furry
              friend.{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className=" font-extrabold text-4xl font-mono text-center">Our Top Doctors</h2>
        <Slideshow/>
      </div>
      
    </div>
  );
};

export default Body;
