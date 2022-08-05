import React from 'react';

const LastPanel = ({ currentType, setDisplay, setTypesToSelect, typesToSelect, display, setChance }) => {
    return (
        <div className="container-panelTryAgain" style={{display: display}}>
            <section className="top-side">
                <p>Fin des relances votre type final sera le type {currentType}</p>
            </section>
            <section className="bot-side">
                <input 
                    type="button" 
                    value="Super!"
                    onClick={() => {
                        setDisplay("none");
                        setTypesToSelect(typesToSelect.filter(elem => elem.type !== currentType));
                        setChance(2);
                    }}
                />
            </section>
        </div>
    );
};

export default LastPanel;