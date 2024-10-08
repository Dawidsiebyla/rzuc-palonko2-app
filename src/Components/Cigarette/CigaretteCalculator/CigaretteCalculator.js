import React, { useEffect, useState } from 'react';
import './CigaretteCalculator.css';

function CigaretteCalculator() {
    const [cigaretteCounter, setCigaretteCounter] = useState(() => {
       
        return parseInt(localStorage.getItem('cigaretteCounter')) || 0;
    });

    const [cigarettePrice, setCigarettePrice] = useState(() => {
        return parseFloat(localStorage.getItem('cigarettePrice')) || 0; 
    });

    const [cigarettePackSize, setCigarettePackSize] = useState(() => {
        return parseInt(localStorage.getItem('cigarettePackSize')) || 0; 
    });

    const [dailyCost, setDailyCost] = useState(0);
    const [shorterLife, setShorterLife] = useState(0);

    useEffect(() => {
        
        const newDailyCost = (cigaretteCounter / cigarettePackSize) * cigarettePrice;
        const newShorterLife = cigaretteCounter * 8; 

        setDailyCost(newDailyCost);
        setShorterLife(newShorterLife);
    }, [cigaretteCounter, cigarettePrice, cigarettePackSize]);

    return (
        <div className='calculator-container'>
            <h2 className='calculator-heading'>Podsumowanie dzienne</h2>
            <p className="calculator-data">Ilość wypalonych papierosów: {cigaretteCounter}</p>
            <p className="calculator-data">Koszt dzienny: {dailyCost.toFixed(2)} zł</p>
            <p className="calculator-data">Skrócenie życia (minuty): {shorterLife}</p>
        </div>
    );
}

export default CigaretteCalculator;
