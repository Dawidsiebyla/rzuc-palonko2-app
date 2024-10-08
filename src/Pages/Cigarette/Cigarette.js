import React from 'react';

import Row from "react-bootstrap/Row";

import Container from 'react-bootstrap/Container';
import Clock from "../../Components/Cigarette/Clock/Clock";


 




import CigaretteCounter from '../../Components/Cigarette/CigaretteCounter/CigaretteCounter';
import CigaretteCalculator from '../../Components/Cigarette/CigaretteCalculator/CigaretteCalculator';
const Cigarette = () => {
    return (
        <Container>
            <Row>
            
                    <Clock/>
                
            </Row>


            <Row>
                    <CigaretteCounter/>
                
            </Row>
                    <CigaretteCalculator/>
            <Row>
                

            </Row>
        </Container>
    );
};

export default Cigarette;
         