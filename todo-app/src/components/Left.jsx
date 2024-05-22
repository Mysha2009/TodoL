import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const Left = () => {
    const [activeLink, setActiveLink] = useState('tasks');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setIsMenuOpen(false); 
    };

    return (
        <div className={`bg-slate-100 text-white w-1/4 font-sans h-screen mt-20 ${isMenuOpen && location.pathname !== '/dashboard' ? '' : 'hidden md:block'}`}>
            <div className="md:hidden flex justify-between items-center px-4 py-2 text-black mt-10 ml-8">
                <p className="text-xl cursor-pointer">Menu</p>
                <HiChevronDown
                    size={32}
                    className={`transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </div>
            <div className={`hidden md:block text-black ml-8 mt-10 px-4 py-2 rounded-md ${activeLink === 'tasks' ? 'bg-teal-200' : ''}`}>
                <Link to="/dashbord" onClick={() => handleLinkClick('tasks')}>
                    <div className="flex items-center">
                        <HiOutlineViewGrid size={32} className="text-sky-400 mt-1" />
                        <p className="text-xl cursor-pointer ml-4">La liste de mes tâches</p>
                    </div>
                </Link>
            </div>
            <div className={`hidden md:block text-black ml-8 mt-10 px-4 py-2 rounded-md ${activeLink === 'pomodoro' ? 'bg-teal-200' : ''}`}>
                <Link to="/pomodoro" onClick={() => handleLinkClick('pomodoro')}>
                    <div className="flex items-center">
                        <FaRegClock size={32} className="text-sky-400 mt-1" />
                        <p className="text-xl cursor-pointer ml-4">Pomodoro</p>
                    </div>
                </Link>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="text-black ml-8 mt-2 px-4 py-2 rounded-md">
                        <Link to="/dashboard" onClick={() => handleLinkClick('tasks')}>
                            <p className={`text-xl cursor-pointer ${activeLink === 'tasks' ? 'bg-teal-200' : ''}`}>La liste de mes tâches</p>
                        </Link>
                    </div>
                    <div className="text-black ml-8 mt-2 px-4 py-2 rounded-md">
                        <Link to="/pomodoro" onClick={() => handleLinkClick('pomodoro')}>
                            <p className={`text-xl cursor-pointer ${activeLink === 'pomodoro' ? 'bg-teal-200' : ''}`}>Pomodoro</p>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Left;
