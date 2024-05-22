import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Enregistrement = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Mot de passe:', password);

        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className='ml-56 mr-32'>
            <div className='flex mt-56 ml-96'>
                <div className='p-20 bg-blue-900 text-white xl:rounded-l-3xl xl:rounded-tr-3xl mt-10 lg:mt-0 hidden lg:flex  '>
                    <div className='mt-10'>
                        <h2 className='text-3xl text-white font-bold text-center'>Heureux de vous <br /> revoir !</h2>
                        <p className='mt-10 text-center text-lg mb-20'>Si vous disposez d'un compte, <br /> connectez-vous ici</p>
                        <Link to="/" className='text-center px-6 py-2 rounded-full text-white bg-transparent border-solid border-2 border-white text-xl hover:bg-white hover:text-blue-800'>Se connecter</Link>
                    </div>
                </div>

                <div className='p-24 shadow-xl mr-20 rounded-r-3xl'>

                    <h2 className="text-3xl font-bold text-blue-800 ">Créez un compte</h2>
                    <p className='mt-10 text-center lg:ml-auto'>J'ai déjà un compte</p>
                    <div className='mt-10'>
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <input type="text" placeholder="Nom d'utilisateur" value={username} onChange={handleUsernameChange} className="px-4 py-2 bg-blue-100 placeholder-black rounded-lg" required />
                            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} className="mt-10 px-4 py-2 bg-blue-100 placeholder-black rounded-lg" required />
                            <input type="password" placeholder="Mot de passe" value={password} onChange={handlePasswordChange} className="mt-10 px-4 py-2 bg-blue-100 placeholder-black rounded-lg" required />
                            <Link to="/" className="px-4 py-2 rounded-full mt-10 text-blue-800 text-center bg-transparent border-solid border-2 border-blue-800 text-xl hover:bg-blue-800 hover:text-white">Créer le compte</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enregistrement;
