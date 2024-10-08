import React, {useState, useEffect} from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import './Cigaretteform.css';

function CigaretteForm() {

    const [untilNow, setUntilNow] = useState(() => {
        
        return parseInt(localStorage.getItem('untilNow')) || 0;
      });


      const [cigarettePrice, setCigarettePrice ] = useState(() => {
        
        return parseFloat(localStorage.getItem('cigarettePrice')) || '';
      });


      const [cigarettePackSize, setCigarettePackSize] = useState(() => {
        
        return parseInt(localStorage.getItem('cigarettePackSize')) || '';
      });
   
    const [cigarettePropose, setCigarettePropose] = useState(() => {

        return parseInt(localStorage.getItem('cigarettePropose')) || 0;
      }); 



    const [formValid, setFormValid] = useState(false);
  
    const validateForm = () => {

        if (untilNow > 0 && cigarettePrice > 0 && cigarettePackSize > 0 && cigarettePropose >= 0) {
        
            setFormValid(true);
        }
         else {
            setFormValid(false);
        }
    };

    useEffect(() => {
        validateForm();

         }, [cigarettePrice, cigarettePackSize, untilNow, cigarettePropose]);


         const handleFormSubmit = (event) => {
            event.preventDefault();
            if (formValid) {
                localStorage.setItem('untilNow', untilNow);
                localStorage.setItem('cigarettePrice', cigarettePrice);
                localStorage.setItem('cigarettePackSize', cigarettePackSize);
                localStorage.setItem('cigarettePropose', cigarettePropose);

                alert('Zapisane');
            } else {

              alert('podaj prawidłowe dane');
            }
          };       



    return (
      <>
    <form onSubmit={handleFormSubmit}>
        <label>Ilość dotychczas wypalanych papierosów: {untilNow} </label>
        <RangeSlider
            value={untilNow} 
            onChange={(e) => {
                setUntilNow(Number(e.target.value)); 
                validateForm();
            }}
            min={0}
            max={80}
        />

        <label>Cena za paczkę papierosów: {cigarettePrice} </label>
        <RangeSlider
            value={cigarettePrice}
            onChange={(e) => {
                setCigarettePrice(Number(e.target.value)); 
                validateForm();
            }}
            min={0}
            max={50}
            step={0.1}
        />

        <label>Ilość sztuk papierosów w paczce: {cigarettePackSize} </label>
        <RangeSlider
            value={cigarettePackSize}
            onChange={(e) => {
                setCigarettePackSize(Number(e.target.value)); 
                validateForm();
            }}
            min={0}
            max={50}
        />

        <label>Mój cel: {cigarettePropose} </label>
        <RangeSlider
            value={cigarettePropose}
            onChange={(e) => {
                setCigarettePropose(Number(e.target.value)); 
                validateForm();
            }}
            min={0}
            max={50}
        />

        <button type="submit">Zatwierdź</button>
    </form>
</>

  
    )
}

export default CigaretteForm;
