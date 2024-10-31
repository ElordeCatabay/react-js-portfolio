import React from 'react';
import elordeimg from "../portfolio/elordeimg.jpg";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import CTA from './CTA';
import './Home.css'; // Import the custom CSS file

const Home = () => {
  return (
    <div 
      name="home" 
      className="h-screen w-full bg-gray-900 flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center md:flex-row gap-8 px-6">
        <div className="text-center md:text-left flex flex-col justify-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight home-heading">
            Elorde De Guzman Catabay Jr.
          </h2>
          <p className="text-gray-300 text-lg max-w-md">
            I'm a passionate Web Developer with a strong foundation in building modern, responsive, and user-centered web applications.
          </p>
          <CTA />
        </div>

        <div className="flex justify-center">
          <img 
            src={elordeimg} 
            alt="Elorde De Guzman Catabay Jr." 
            className="rounded-full w-2/3 md:w-80 border-4 border-gray-700 shadow-lg home-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
