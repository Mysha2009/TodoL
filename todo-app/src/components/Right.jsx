import Calendar from '../images/calendar.png';
import { Link } from 'react-router-dom';

const Right = ({onClickToday, onClickAllTasks, onClickWaitingTasks}) => {
    return (
        <div className="ml-10 mt-32  mr-20 mb-10 sm:mr-20 ">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 ">
                <Link to='/todaytasks' className="flex-1 bg-blue-400 hover:bg-blue-200 rounded-md px-4 mt-10 lg:px-28 py-4 lg:py-10 cursor-pointer" onClick={onClickToday}>
                    <img src={Calendar} alt='' className="mx-auto" />
                    <p className='text-white mt-2 lg:mt-6 text-xl font-bold text-center'>Aujourd'hui</p>
                </Link>

                <Link to='/alltasks' className="flex-1 bg-yellow-400 hover:bg-yellow-200 rounded-md px-4 mt-10 lg:px-28 py-4 lg:py-10 cursor-pointer" onClick={onClickAllTasks}>
                    <img src={Calendar} alt='' className="mx-auto" />
                    <p className='text-white mt-2 lg:mt-6 text-xl font-bold text-center'>Toute mes tâches</p>
                </Link>

                <Link to='/attente' className="flex-1 bg-red-400 hover:bg-red-200 rounded-md px-4 mt-10 lg:px-28 py-4 lg:py-10 cursor-pointer" onClick={onClickWaitingTasks}>
                    <img src={Calendar} alt='' className="mx-auto" />
                    <p className='text-white mt-2 lg:mt-6 text-xl font-bold text-center'>En attente</p>
                </Link>
            </div>

            <div className='bg-blue-300 px-4 mt-12 lg:px-20 py-4 lg:py-20  lg:mt-20 rounded-xl'>
                <h2 className='font-bold text-4xl'>Vérifiez vos tâches actuelles ici</h2>
                <p className='mt-2 lg:mt-6 text-sm mb-10'>Pour rester organisé, assurez-vous de vérifier vos tâches actuelles ici, sur notre tableau de bord de gestion de tâches</p>
                <Link to="/alltasks" className='mt-2 lg:mt-6 px-4 lg:px-8 py-2 rounded-md bg-blue-400 text-white border-solid border-2 border-white'>Voir plus</Link>
            </div>
        </div>
    );
};

export default Right;
