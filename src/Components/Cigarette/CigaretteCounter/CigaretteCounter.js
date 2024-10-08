import React, { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import './CigaretteCounter.css';

function CigaretteCounter() {
    const [count, setCount] = useLocalStorage('cigaretteCounter', 0);
    const [lastReset, setLastReset] = useLocalStorage('lastReset', new Date());

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const saveDailyCount = () => {
        const currentDate = formatDate(new Date());
        const storedData = localStorage.getItem('cigaretteLog') || '{}';
        const cigaretteLog = JSON.parse(storedData);
        cigaretteLog[currentDate] = count;
        localStorage.setItem('cigaretteLog', JSON.stringify(cigaretteLog));
    };

    const resetCounterAtMidnight = () => {
        const now = new Date();
        const nextMidnight = new Date();
        nextMidnight.setHours(24, 0, 0, 0);
        const timeUntilMidnight = nextMidnight - now;

        setTimeout(() => {
            saveDailyCount();
            setCount(0);
            setLastReset(new Date());
            resetCounterAtMidnight();
        }, timeUntilMidnight);
    };

    useEffect(() => {
        const storedLastReset = new Date(lastReset);
        const now = new Date();

        if (storedLastReset.toDateString() !== now.toDateString()) {
            setCount(0);
            setLastReset(now);
        }

        resetCounterAtMidnight();
    }, [lastReset, setCount, setLastReset]);

    const incrementCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    return (
        <div className="counter-container">
            <button 
                onClick={incrementCount}
                className="counter-button"
            >
                {count}
            </button>
            <div className="counter-text">
                Wypalono dzisiaj
            </div>
        </div>
    );
}

export default CigaretteCounter;
