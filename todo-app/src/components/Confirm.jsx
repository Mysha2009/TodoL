import React from 'react';

const Confirm = ({ isOpen, onCancel, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white w-1/4 p-6 rounded-lg shadow-lg">
                <p className="text-lg font-bold mb-4">Êtes-vous sûr de vouloir supprimer cette tâche ?</p>
                <div className="flex justify-end">
                    <button onClick={onCancel} className="mr-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">
                        Annuler
                    </button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                        Confirmer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Confirm;
