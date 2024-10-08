import React, { useState, useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import './CigarettePropose.css'; 

function CigarettePropose() {
    const [cigaretteCounter] = useLocalStorage('cigaretteCounter', 0); 
    const [untilNow, setUntilNow] = useLocalStorage('untilNow', 0); 
    const [cigarettePropose, setCigarettePropose] = useLocalStorage('cigarettePropose', 0); 
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (cigaretteCounter > cigarettePropose) {
            setMessage('Przykro mi, ale palisz za dużo.');
        } else if (cigaretteCounter === cigarettePropose) {
            setMessage('Osiągnąłeś dzienny limit papierosów. Uważaj!');
        } else {
            const remaining = cigarettePropose - cigaretteCounter;
            if (remaining <= 2) {
                setMessage(`Ostrzeżenie: Możesz wypalić jeszcze tylko ${remaining} papierosów!`);
            } else {
                setMessage(`Możesz jeszcze wypalić ${remaining} papierosów dzisiaj.`);
            }
        }
        
        if (cigaretteCounter > untilNow) {
            setMessage(prevMessage => `${prevMessage} Wypaliłeś więcej papierosów niż dotychczas!`);
        }
    }, [cigaretteCounter, cigarettePropose, untilNow]);

    return (
        <div className="container">
            <h2>Twój cel dzienny</h2>
            <p>Dotychczas wypalone papierosy: {untilNow}</p>
            <p>Wypalone dzisiaj papierosy: {cigaretteCounter}</p>
            <p>Ustalony dzienny cel: {cigarettePropose}</p>
            <p className="message">{message}</p>
        </div>
    );
}

export default CigarettePropose;

 