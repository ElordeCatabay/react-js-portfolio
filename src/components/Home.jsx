import React from 'react'
import elordeimg from "../portfolio/elordeimg.jpg"
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import CTA from './CTA';
const Home = () => {
  return (
    <div name="home" 
    className="h-screen w-full bg-black"
    >
    <div className="max-w-screen-lg mx-auto flex flex-col
    items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full"> 
           <h2 className="text-4xl sm:text-7xl font-bold text-white">
             Elorde De Guzman Catabay Jr.
             </h2>
           <p className="text-gray-500 py-4 max-w-md">
            I'm a Webdeveloper
           </p>     
           <CTA/>
           <div>
            
           
           </div>
        </div>
         
        <div>
         <img src={elordeimg} alt="elordeimage" className="rounded-full mx-auto w-2/3 md:w-80"/>
        </div>
      </div>
    </div>
  );
};

export default Home
