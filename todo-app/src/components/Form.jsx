import React, { useState } from 'react';

const Form = ({ onTaskCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('A faire');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Math.random(),
            title,
            description,
            dueDate,
            priority,
            status,
            completed: false,
        };
        onTaskCreate(newTask);
        setTitle('');
        setDescription('');
        setDueDate('');
        setPriority('');
        setStatus('A faire');
    };

    return (
        <form onSubmit={handleSubmit} className="px-32 py-20 bg-white rounded-lg shadow-md">
            <label htmlFor="title" className="block mb-2 font-semibold">Titre de la tâche</label>
            <input type="text" id="title" placeholder="Entrer le titre" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full px-3 py-2 mb-8 border rounded-lg" />

            <label htmlFor="description" className="block mb-2 font-semibold"> Faire une description</label>
            <textarea id="description" placeholder="Entrer une description" value={description} onChange={(e) => setDescription(e.target.value)} required className="w-full px-3 py-2 mb-8 border rounded-lg" />

            <label htmlFor="dueDate" className="block mb-2 font-semibold">Date d'échéance</label>
            <input type="date" id="dueDate" placeholder="Taper la date d'achéance de la tâche ici" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required className="w-full px-3 py-2 mb-8 border rounded-lg" />

            <label htmlFor="priority" className="block mb-2 font-semibold">Priorité</label>
            <select id="priority" placeholder="Mettre la priorité de la tâche" value={priority} onChange={(e) => setPriority(e.target.value)} required className="w-full px-3 py-2 mb-16 border rounded-lg">
                <option value="">Sélectionnez une priorité</option>
                <option value="faible">Faible</option>
                <option value="moyenne">Moyenne</option>
                <option value="importante">Importante</option>
            </select>

            <label htmlFor="status" className="block mb-2 font-semibold">Statut</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} required className="w-full px-3 py-2 mb-8 border rounded-lg">
                <option value="À faire">À faire</option>
                
            </select>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Créer la tâche</button>
        </form>
    );
};

export default Form;




