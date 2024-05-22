import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Connexion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Email:', email);
        console.log('Mot de passe:', password);

        setEmail('');
        setPassword('');
    };

    return (
        <div className='flex flex-col lg:flex-row justify-center items-center h-screen'>
            <div className='xl:ml-56'>
                <div className='xl:flex mt-10 xl:mt-56 xl:mr-72 xl:mb-72'>
                    <div className='p-20 lg:p-20 shadow-xl rounded-lg xl:rounded-l-lg xl:rounded-tl-3xl'>
                        <h2 className="text-3xl font-bold text-blue-800 ">Connectez-vous</h2>
                        <p className='mt-5 lg:mt-10 text-center'>Je n'ai pas de compte</p>
                        <div className='mt-5 lg:mt-10  lg:flex'>
                            <form onSubmit={handleSubmit} className="flex flex-col">
                                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} className="px-4 py-2 bg-blue-100 placeholder-black rounded-lg" required />
                                <input type="password" placeholder="Mot de passe" value={password} onChange={handlePasswordChange} className="mt-5 px-4 py-2 bg-blue-100 placeholder-black rounded-lg" required />
                                <Link to="/dashbord" className="px-4 py-2 rounded-full mt-5 text-blue-800 text-center bg-transparent border-solid border-2 border-blue-800 text-xl hover:bg-blue-800 hover:text-white">Connecter</Link>
                            </form>
                        </div>
                    </div>

                    <div className='p-10 lg:p-20 bg-blue-900 text-white rounded-lg xl:rounded-r-lg xl:rounded-tr-3xl mt-10 lg:mt-0 hidden lg:flex'>
                        <div className='mt-10'>
                            <h2 className='text-3xl text-white font-bold text-center'>Bienvenue !</h2>
                            <p className='mt-5 lg:mt-10 text-center text-lg mb-20'>Créez votre compte et gérez <br /> vos tâches efficacement</p>
                            <Link to="/enregistrement" className='text-center px-6 py-2 rounded-full text-white bg-transparent border-solid border-2 border-white text-xl hover:bg-white hover:text-blue-800 lg:px-4 '>Créer un compte</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connexion;
