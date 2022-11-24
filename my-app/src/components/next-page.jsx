import React from 'react';
import { NavLink } from 'react-router-dom';

const NextPage = ({ onClick }) => {
    
    return (
        <div className="container-next-page">
            <p>Tous les challengers sont enregistrés, cliquez sur continuer pour randomiser le type</p>
            <NavLink to="/choose-type">
                <input 
                    type="button"
                    value= "Continuer"
                    onClick={onClick}
                />
            </NavLink>
        </div>
    );
};

export default NextPage;