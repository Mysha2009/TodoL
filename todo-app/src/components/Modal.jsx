import React from 'react';
import Form from './Form';
import Edit from './Edit';


const Modal = ({ isOpen, onClose, onTaskCreate, taskToEdit, onTaskUpdate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50">
      
      <span onClick={onClose} className="absolute top-0 right-0 cursor-pointer  rounded-full mr-96 mt-16 text-3xl bg-white py px-2">&times;</span>
      {taskToEdit ? (
        <Edit task={taskToEdit} onSubmit={onTaskUpdate} />
      ) 
       : (
        <Form onTaskCreate={onTaskCreate} />
      )
      }
      
    </div>
  );
};

export default Modal;
