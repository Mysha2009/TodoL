import React, { useState, useEffect } from 'react';
import Pencil from '../images/pencil.png';
import Modal from './Modal';
import Form from './Form';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { PiSealWarningFill } from "react-icons/pi";
import { BsJournalText } from "react-icons/bs";
import { TbStatusChange } from "react-icons/tb";
import VoirPlus from './VoirPlus';
import { MdMovieEdit } from "react-icons/md";
import Edit from './Edit';
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import Confirm from './Confirm';

function Tache ( {onTaskCreate, task} ) {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todayTasks, setTodayTasks] = useState(storedTasks);
    const [taskToDeleteId, setTaskToDeleteId] = useState(null);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [showDetails, setShowDetails] = useState(false);


    const handleShowDetails = () => {
        setShowDetails(!showDetails);
      };
      
   
     useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todayTasks));
    }, [todayTasks]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleTaskCreate = (newTask) => {
      setTodayTasks([...todayTasks, newTask]);
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


  const today = new Date().toISOString().slice(0, 10); // Date au format "AAAA-MM-JJ"

  const filteredTasks = todayTasks.filter(task => task.dueDate === today);
  
    return (
        <div className='w-full px-8'>
            <div className='mt-32 inline-flex w-full justify-between items-center '>
                <div className='inline-flex'>
                    <div className=''>
                        <Link to='/dashbord'>
                            <AiOutlineDoubleLeft size={38} className=''/>
                        </Link>
                    </div>
                    <div className='inline-flex'>
                        <p className='font-bold text-2xl '> Mes tâches/<span className='font-thin text-xl'>Aujourd'hui</span></p>
                    </div>
                </div>
                 
                    <div className='inline-flex'>
                        <span className='hidden md:inline-block'>Ajouter une tâche</span>
                        <span className='cursor-pointer'><RiPencilFill size={36} color='orange' onClick={openModal}/></span>
                    </div>
                    
                
            </div>
            <div>
                <div className='mt-10 px-8'>
                    <ul className='w-full'>
                        {filteredTasks.map((task) => (
                            <li key={task.id} className=" px-8 py-8 shadow-lg mb-10 align-center expand">
                                <div className='md:grid md:grid-cols-3 flex justify-between'>

                                    <span className='inline-flex items-center gap-x-2'>
                                        <BsJournalText size={32} color='blue' />
                                        {task.title}
                                    </span>


                                    <div className={`font-bold inline-flex items-center ${task.status === 'A faire' ? 'text-red-500' : task.status === 'en cours' ? 'text-orange-500' : 'text-green-500'}`}>
                                            {task.status}
                                            <section className='ml-2'>
                                                        {task.status === 'A faire' && (
                                                        <button onClick={() => handleStatusChange(task.id, 'en cours')} className= ' px-4 py-2 bg-blue-500 text-white rounded-lg'>
                                                              Changer l'état
                                                        </button>
                                                        )}
                                                        {task.status === 'en cours' && (
                                                        <button onClick={() => handleStatusChange(task.id, 'terminé')}  className= ' px-4 py-2 bg-blue-500 text-white rounded-lg'>
                                                             Changer l'état
                                                        </button>
                                                        )}
                                                        {task.status === 'Terminé' && (
                                                        <button onClick={() => handleStatusChange(task.id, 'terminé')} >
                                                             Terminé
                                                        </button>
                                                        )}
                                                </section>

                        </div>

        <button onClick={handleShowDetails} className="text-blue-500 flex justify-end">
            Voir plus
        </button>
{showDetails && (
  <div>
    <div className='mt-10'>
      <p><span className='text-lg font-bold'>Description:</span> {task.description}</p>
    </div>
    <div className='flex flex-col lg:flex-row justify-between px-4 gap-x-28'>
      <section className='mt-10 mx-10'>
        <div className='items-center inline-flex'>
          <div><BsCalendar2CheckFill size={32} className='text-sky-400'/></div>
          <div className='ml-5 '>
            <p className='text-lg text-sky-400 font-bold '>Date d'échéance</p>
            <p>{task.dueDate}</p>
          </div>
        </div>
      </section>
      <section className='mt-10 mx-10'>
        <div className='inline-flex items-center'>
          <div><PiSealWarningFill size={32} className='text-sky-400'/></div>
          <div className='ml-5'>
            <p className='text-lg text-sky-400 font-bold'>Priorité</p>
            <p>{task.priority}</p>
          </div>
        </div>
      </section>
      <section className='mt-10 mx-10'>
        <div className='inline-flex items-center'>
          <div><TbStatusChange size={32} className='text-sky-400'/> </div>
          <div className='ml-5'>
            <p className='text-lg text-sky-400 font-bold'>Etat initial</p>
            <p>{task.status}</p>
          </div>
        </div>
      </section>
      <div className='flex flex-col mt-10 mx-10'>
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
  </div>
)}


                                    

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

export default Tache;
