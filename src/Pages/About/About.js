import React from 'react';
import './About.css'; 

function About() {
    return (
        <div className="about-container">
            <h2>O Paleniu Papierosów</h2>
            <p>
                Na całym świecie z powodu palenia papierosów umiera rocznie 4 miliony ludzi, 
                co daje 11 000 zgonów dziennie. W Polsce z powodu chorób wywołanych nałogiem tytoniowym 
                umiera ok. 100 000 osób. Żyją one znacznie krócej niż osoby wolne od nałogu. 
                Udowodniono, że co trzeci palacz umrze przed 60 rokiem życia.
            </p>
            <p>
                Jeśli nie chcesz skończyć w piachu przed otrzymaniem upragnionej emerytury, 
                skorzystaj z aplikacji <strong>Rzuć Palonko</strong>. Pokaże Ci ona, ile tracisz 
                ciężko zarobionych pieniędzy i zdrowia, którego nie kupisz za żadne pieniądze.
            </p>
            <p>
                Już dziś postaw sobie cel, który możesz zrealizować, a <strong>Rzuć Palonko</strong> Ci pomoże! 😉
            </p>
            <p className="about-footer">Powodzenia!!!</p>
        </div>
    );
}

export default About;
