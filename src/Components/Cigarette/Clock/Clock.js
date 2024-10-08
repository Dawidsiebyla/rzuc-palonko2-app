
import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="clock-container">
            <h1 className="clock-time">{time.toLocaleTimeString()}</h1>
        </div>
    );
};

export default Clock;
