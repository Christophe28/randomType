import React from 'react';

const PanelTryAgain = ({ display, setDisplay, type, setTypeIsSelected, typesToSelect, setLastChoiceByUser, currentPlayer, chance, setChance }) => {
    return (
        <div 
        className="container-panelTryAgain"
        style={{display: display}}
        >
            <section className="top-side">
                <p>Challenger {currentPlayer}. Votre type sera le type <strong>{type}</strong> ! Souhaitez vous faire une relance ?</p>
            </section>
            <section className="bot-side">
                <input 
                    type="button" 
                    value="Oui" 
                    onClick={(e) => {
                            setDisplay("none");     
                            setTypeIsSelected(typesToSelect.map((type) => false))  
                            setChance(chance - 1);
                            setLastChoiceByUser(e.target.value);
                        }
                    }
                />
                <input 
                    type="button" 
                    value="Non" 
                    onClick={(e) => {
                            setLastChoiceByUser(e.target.value);
                            setChance(0);
                        }
                    }
                />
            </section>
        </div>
    );
};

export default PanelTryAgain;