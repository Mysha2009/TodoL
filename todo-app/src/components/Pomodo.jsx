import React, { useState, useEffect } from 'react';

const Pomodoro = () => {
    const [seconds, setSeconds] = useState(1500); // 25 minutes en secondes
    const [isActive, setIsActive] = useState(false);
    const [task, setTask] = useState('');

    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            clearInterval(interval);
            setIsActive(false);
            alert('Pomodoro terminé !');
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setSeconds(1500);
        setIsActive(false);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="flex flex-col items-center ml-20 h-full mt-32 lg:ml-96 lg:mt-20">
            <h1 className="text-3xl font-bold mb-6">Pomodoro</h1>
            <div className="text-4xl mb-6">{formatTime(seconds)}</div>
            <div className="flex flex-col lg:flex-row items-center gap-4">
                <input
                    type="text"
                    placeholder="Tâche à effectuer"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg mb-4 lg:mb-0"
                />
                <div className="flex gap-4">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={toggleTimer}
                    >
                        {isActive ? 'Pause' : 'Start'}
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded-lg"
                        onClick={resetTimer}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pomodoro;
