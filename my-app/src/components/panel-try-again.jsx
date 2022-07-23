import React from 'react';

const PanelTryAgain = ({ display, type, updateChoice }) => {
    return (
        <div 
        className="container-panelTryAgain"
        style={{display: display}}
        >
            <section className="top-side">
                <p>Votre type sera le type <strong>{type}</strong> ! Souhaitez vous faire une relance ?</p>
            </section>
            <section className="bot-side">
                <input 
                    type="button" 
                    value="Oui" 
                    onClick={updateChoice}
                />
                <input 
                    type="button" 
                    value="Non" 
                    onClick={updateChoice}
                />
            </section>
        </div>
    );
};

export default PanelTryAgain;