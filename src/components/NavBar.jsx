import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'education' },
        { id: 3, link: 'portfolio' },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black sticky top-0 z-50 shadow-lg">
            <div>
               
            </div>

            <ul className="hidden md:flex flex-grow justify-center space-x-8"> {/* Added spacing between links */}
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="cursor-pointer capitalize text-lg font-semibold text-gray-300 hover:text-white transition duration-300 ease-in-out"
                    >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-1 z-10 text-gray-300 sm:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-16 left-0 w-full bg-gradient-to-b from-black to-gray-800 text-gray-300 sm:hidden space-y-6"> {/* Added spacing between items */}
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="cursor-pointer capitalize text-3xl font-semibold hover:text-white transition duration-300 ease-in-out"
                        >
                            <Link to={link} smooth duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;
