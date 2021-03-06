import React from 'react';

const PanelTryAgain = ({ display, setDisplay, type, setTypeIsSelected, typesToSelect, setTypesToSelect }) => {
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
                    onClick={(e) => {
                            setDisplay("none");     
                            setTypeIsSelected(typesToSelect.map((type) => false))  
                        }
                    }
                />
                <input 
                    type="button" 
                    value="Non" 
                    onClick={(e) => {
                            setDisplay("none");
                            setTypesToSelect(typesToSelect.filter(elem => elem.type !== type));
                        }
                    }
                />
            </section>
        </div>
    );
};

export default PanelTryAgain;