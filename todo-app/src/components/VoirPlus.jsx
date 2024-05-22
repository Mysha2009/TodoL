import React, { useState } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";


const VoirPlus = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="max-w-[1423px] mx-auto  overflow-hidden ">
            <div className={`px-4 py-2 ${isOpen ? 'block' : 'hidden'} w-full`}>
                {children}
            </div>
            <div className="flex flex-row ml-auto">
                <div className='flex gap-3 absolute right-72'>
                    <button className=" text-black" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Voir moins' : 'Voir plus'}
                    </button>
                    <div className='mt-1'> <AiOutlineArrowRight /></div>
                </div>
                
            </div>
        </div>
    );
};

export default VoirPlus;
