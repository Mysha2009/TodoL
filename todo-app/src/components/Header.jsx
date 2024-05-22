import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='bg-teal-50 py-4 lg:py-8 px-4 lg:px-8 w-full fixed top-0 '>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <img src={Logo} alt="Le logo du site" className='h-8 mr-2 lg:mr-4' />
                    <p className='text-cyan-500 font-bold capitalize text-lg lg:text-2xl'>Todo</p>
                </div>
                <div className='hidden lg:flex space-x-4'>
                    <Link to="/enregistrement" className='bg-cyan-500 text-white text-lg hover:bg-blue-200 px-4 py-2 rounded-md'>S'inscrire</Link>
                    <Link to="/" className='bg-cyan-500 text-white text-lg hover:bg-blue-200 px-4 py-2 rounded-md'>Connexion</Link>
                </div>
                <div className='flex lg:hidden'>
                    {isMenuOpen ? (
                        <button className='text-cyan-500 focus:outline-none' onClick={closeMenu}>
                            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                    ) : (
                        <button className='text-cyan-500 focus:outline-none' onClick={toggleMenu}>
                            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
            <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className='flex flex-col items-center mt-4'>
                    <Link to="/enregistrement" className='bg-cyan-500 text-white text-lg hover:bg-blue-200 px-4 py-2 rounded-md mb-2'>S'inscrire</Link>
                    <Link to="/" className='bg-cyan-500 text-white text-lg hover:bg-blue-200 px-4 py-2 rounded-md'>Connexion</Link>
                    <Link to="/dashbord" className='bg-teal-200 text-black text-lg block px-4 py-2 rounded-md mt-4'>La liste de mes tâches</Link>
                    <Link to="/pomodoro" className='bg-teal-200 text-black text-lg block px-4 py-2 rounded-md mt-2'>Pomodoro</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
