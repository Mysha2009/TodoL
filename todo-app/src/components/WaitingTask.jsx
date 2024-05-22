import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Modal from './Modal';
import Form from './Form';
import VoirPlus from './VoirPlus';
import { MdDeleteForever } from "react-icons/md";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { PiSealWarningFill } from "react-icons/pi";
import { BsJournalText } from "react-icons/bs";
import { MdMovieEdit } from "react-icons/md";
import { TbStatusChange } from "react-icons/tb";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import Edit from './Edit';
import Confirm from './Confirm';

const WaitingTask = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [waitingTasks, setWaitingTasks] = useState(storedTasks);
    const [taskToDeleteId, setTaskToDeleteId] = useState(null);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);

    const [todayTasks, setTodayTasks] = useState([]);
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setWaitingTasks(storedTasks);
        setTodayTasks(storedTasks);
    }, []);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleTaskCreate = (newTask) => {
        setWaitingTasks([...waitingTasks, newTask]);
        setIsModalOpen(false);
    };

    const confirmDelete = (taskId) => {
        setTaskToDeleteId(taskId);
        setIsConfirmOpen(true);
    };
  
    const handleDeleteTask = () => {
        const updatedTasks = todayTasks.filter(task => task.id !== taskToDeleteId);
        setTodayTasks(updatedTasks);
        setIsConfirmOpen(false);
    };
    
      const handleStatusChange = (taskId, newStatus) => {
        const updatedTasks = todayTasks.map(task => {
            if (task.id === taskId) {
                return { ...task, status: newStatus };
            }
            return task;
        });
        setTodayTasks(updatedTasks);
    };
    
    const handleEditTask = (task) => {
        setTaskToEdit(task);
        setIsEditing(true);
        openModal();
      };
    
    const handleTaskUpdate = (updatedTask) => {
        const updatedTasks = todayTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        );
        setTodayTasks(updatedTasks);
        setIsModalOpen(false);
        setTaskToEdit(null);
        setIsEditing(false);
      };

    const filteredTasks = waitingTasks.filter(task => task.status === 'A faire' || task.status === 'en cours');

    return (
        <div>
            <div className='mt-32 ml-10 flex gap-96'>
                <div className='flex gap-6'>
                    <Link to='/dashbord'>
                        <div className='mt-1'>
                            <AiOutlineDoubleLeft size={38} className='mt-4'/>
                        </div>
                    </Link>
                    <div className='mt-5'>
                        <p className='font-bold text-2xl'>Mes tâches/ <span className='font-thin text-xl'>En attente</span></p>
                    </div>
                </div>
                
            </div>
            <div>
                <div className='mt-10 ml-14'>
                    <ul>
                        {filteredTasks.map((task) => (
                            <li key={task.id} className=" mb-10 p-10 align-center">
                                <div className='flex gap-3 '>
                                   <div className='absolute left-1/4 ml-20 flex gap-6 mb-12'>
                                    <div className='mr-auto flex flex-start '> <BsJournalText size={32} color='blue' /></div>
                                    <div className='mr-72 mb-8 text-lg flex flex-row '>{task.title} </div>
                                     <div className=' gap-2 justify-center item-center pb-10 hidden md:flex'>
                                     <div className={`font-bold ${task.status === 'A faire' ? 'text-red-500' : task.status === 'en cours' ? 'text-orange-500' : 'text-green-500'}`}>
                                            {task.status}
                                        </div>
                                        <div className='ml-20'>
                                                    <section>
                                                        {task.status === 'A faire' && (
                                                        <button onClick={() => handleStatusChange(task.id, 'en cours')} className= ' px-4 py-2 bg-blue-500 text-white rounded-lg'>
                                                            
                                                              Commencer la tâche
                                                        </button>
                                                        )}
                                                        {task.status === 'en cours' && (
                                                        <button onClick={() => handleStatusChange(task.id, 'terminé')}  className= ' px-4 py-2 bg-blue-500 text-white rounded-lg'>
                                                              Marquer comme terminée
                                                        </button>
                                                        )}
                                                        {task.status === 'Terminé' && (
                                                        <button onClick={() => handleStatusChange(task.id, 'terminé')} >
                                                             Terminé
                                                        </button>
                                                        )}
                                                    </section>
                                        </div>
                                     </div>
                                   </div>
                                    <div className=' flex flex-row mr-auto cursor-pointer    '>
                                        <div>
                                            <VoirPlus>
                                                <div className='mt-10'><p><span className='text-lg font-bold'>Description:</span> {task.description}</p></div>
                                                <div className='flex flex-col gap-10 mt-10 md:flex-row  md:gap-4'>
                                                    <section className='mt-10'>
                                                        <div className='flex'>
                                                            <div><BsCalendar2CheckFill size={32} className='text-sky-400'/></div>
                                                            <div className='ml-5'>
                                                                 <p className='text-lg text-sky-400 font-bold'>Date d'échéance</p>
                                                                <p>{task.dueDate}</p>
                                                             </div>
                                                        </div>
                                                    </section>

                                                    <section className='mt-10'>
                                                        <div className='flex'>
                                                            <div><PiSealWarningFill size={32} className='text-sky-400'/></div>
                                                            <div className='ml-5'>
                                                                 <p className='text-lg text-sky-400 font-bold'>Priorité</p>
                                                                <p>{task.priority}</p>
                                                             </div>
                                                        </div>
                                                    </section>

                                                    <section className='mt-10'>
                                                        <div className='flex'>
                                                            <div><TbStatusChange size={32} className='text-sky-400'/> </div>
                                                            <div className='ml-5'>
                                                                 <p className='text-lg text-sky-400 font-bold'>Etat initial</p>
                                                                <p>{task.status}</p>
                                                             </div>
                                                        </div>
                                                    </section>

                                                    <div className='flex flex-col mt-10'>
                                                    <section className=''>
                                                            <button onClick={() => handleEditTask(task)} className='flex gap-2'>
                                                                <div><MdMovieEdit size={24} color='orange'/> </div>
                                                                <div>Modifier</div>
                                                            </button>
                                                    </section>

                                                    <section className=''>
                                                            <div className=''>
                                                            <button onClick={() => confirmDelete(task.id)} className='flex gap-2 mt-2'>
                                                                <div><MdDeleteForever size={24} color='orange'/></div> 
                                                                
                                                                <div>Supprimer</div>  
                                                            </button>
                                                            </div>
                                                    </section>
                                                    </div>
                                                </div>
                                            </VoirPlus>
                                        </div>
                                        
                                    </div>
                                </div>
                            
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} onTaskCreate={handleTaskCreate} taskToEdit={taskToEdit} onTaskUpdate={handleTaskUpdate}>
                {isEditing ? (
                <Edit task={taskToEdit} onSubmit={handleTaskUpdate} />
                ) : (
                <Form onTaskCreate={handleTaskCreate} />
                )}
            </Modal>

            <Confirm isOpen={isConfirmOpen} onCancel={() => setIsConfirmOpen(false)} onConfirm={handleDeleteTask} />
        </div>
    );
};

export default WaitingTask;
