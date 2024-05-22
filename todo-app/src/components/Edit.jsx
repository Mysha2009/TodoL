import React, { useState } from 'react';

function Edit({ task, onSubmit }) {
    const [editedTask, setEditedTask] = useState(task);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({ ...editedTask, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(editedTask);
    };

    return (
        <form onSubmit={handleSubmit} className="p-20 bg-white rounded-lg shadow-md">
            <label htmlFor="title" className="block mb-2 font-semibold">Titre de la tâche</label>
            <input
                type="text"
                id="title"
                value={editedTask.title}
                onChange={handleChange}
                name="title"
                className="w-full px-3 py-2 mb-8 border rounded-lg"
                required
            />

            <label htmlFor="description" className="block mb-2 font-semibold">Description</label>
            <textarea
                id="description"
                value={editedTask.description}
                onChange={handleChange}
                name="description"
                className="w-full px-3 py-2 mb-8 border rounded-lg"
                required
            ></textarea>

            <label htmlFor="dueDate" className="block mb-2 font-semibold">Date d'échéance</label>
            <input
                type="date"
                id="dueDate"
                value={editedTask.dueDate}
                onChange={handleChange}
                name="dueDate"
                className="w-full px-3 py-2 mb-8 border rounded-lg"
                required
            />

            <label htmlFor="priority" className="block mb-2 font-semibold">Priorité</label>
            <select
                id="priority"
                value={editedTask.priority}
                onChange={handleChange}
                name="priority"
                className="w-full px-3 py-2 mb-16 border rounded-lg"
                required
            >
                <option value="">Sélectionnez une priorité</option>
                <option value="faible">Faible</option>
                <option value="moyenne">Moyenne</option>
                <option value="importante">Importante</option>
            </select>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Modifier la tâche</button>
        </form>
    );
}

export default Edit;
