import React, { useState } from 'react'
import{FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';
const NavBar=()=>{

    const[nav,setNav]= useState(false);

const links=[
{
    id:1,
    link:'home'
},
{
    id:2,
    link:'education'
},
{
    id:3,
    link:'portfolio'
},
]



  return (
    <div className="flex justify-between items-center w-full h-20 
    px-4 text-white bg-black">
        <div>
            <h1 className="text-5xl font-signature ml-2">Elorde</h1>
        </div>

        <ul className="hidden md:flex">

            {links.map(({id,link})=> (
                <li 
                key={id}
                className="px-4 cursor-pointer capitalize font-medium
                text-gray-500 hover:scale-105 duration-200"
                >
                      <Link to={link}smooth duration={500}>
                   {link}
                    </Link>
                </li>
            ))}


       
        </ul>
        <div 
        onClick={()=>setNav(!nav)} className="cursor-pointer pr-1 z-10 text-gray-500 sm:hidden"
        >
            {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
        </div>
       
       {nav&& (
        <ul className="flex flex-col justify-center items-center 
        absolute top-1 left-40 bg-gradient-to-b
        from-black to-gray-800 text-gray-500">
    
{links.map(({id,link})=> (
                <li 
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link to={link}smooth duration={500}>
                   {link}
                    </Link>
                </li>
            ))}  
        </ul>

       )}

        
    </div>
  );
};

export default NavBar
