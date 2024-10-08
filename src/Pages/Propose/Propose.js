import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";
import CigarettePropose from "../../Components/Cigarette/CigarettePropose/CigarettePropose";

const Propose = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <CigarettePropose/>
                    </Col>
                </Row>

                <Row>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Propose;