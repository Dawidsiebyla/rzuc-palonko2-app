import React, { useEffect, useState } from 'react';

function CigaretteBalance() {
    const [todayCount, setTodayCount] = useState(0);
    const [yesterdayCount, setYesterdayCount] = useState(0);
    const [weeklyBalance, setWeeklyBalance] = useState(0);

   
    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

   
    const getPreviousDate = (daysAgo) => {
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        return formatDate(date);
    };

    useEffect(() => {
        const storedData = localStorage.getItem('cigaretteLog') || '{}'; 
        const cigaretteLog = JSON.parse(storedData);

        
        const today = formatDate(new Date());
        const yesterday = getPreviousDate(1);

        
        setTodayCount(cigaretteLog[today] || 0);
        setYesterdayCount(cigaretteLog[yesterday] || 0);

        
        let weeklyTotal = 0;
        for (let i = 0; i < 7; i++) {
            const pastDate = getPreviousDate(i);
            weeklyTotal += cigaretteLog[pastDate] || 0;
        }
        setWeeklyBalance(weeklyTotal);
    }, []);

    return (
        <div className='balance-container '>
            <h2 className='balance-heading'>Zestawienie wypalonych papierosów</h2>
            <p className='balance-data'>Dzisiaj: {todayCount} papierosów</p>
            <p className='balance-data'>Wczoraj: {yesterdayCount} papierosów</p>
            <p className='balance-data'>Bilans tygodniowy: {weeklyBalance} papierosów</p>
        </div>
    );
}

export default CigaretteBalance;
