import React from 'react';
import { NavLink } from 'react-router-dom';

const LastPanel = ({ currentType, setDisplay, setTypesToSelect, typesToSelect, display, setChance, challenger, currentPlayer }) => {
    return (
        <div className="container-panelTryAgain" style={{display: display}}>
            <section className="top-side">
                <p>Fin des relances votre type final sera le type {currentType}</p>
            </section>
            <section className="bot-side">
                {
                    challenger.length === currentPlayer ? 
                    <NavLink to="/ourTypes">
                        <input type="button" value="Super!" />
                    </NavLink>
                    :
                    <input 
                    type="button" 
                    value="Super!"
                    onClick={() => {
                        setDisplay("none");
                        setTypesToSelect(typesToSelect.filter(elem => elem.type !== currentType));
                        setChance(2);
                    }}
                    />
                }
            </section>
        </div>
    );
};

export default LastPanel;