import React, { useState } from 'react';

const CardTypes = ({ types, updateBg }) => {

    const changeStyle = (array, index, color) => {
        if(array[index] === true) {
            const trueStyle = {
                background: color,
                color: "white"
            }
            return trueStyle
        }
        else {
            const falseStyle = {
                color: color
            }
            return falseStyle
        }
    }

    return (
        <div className="container-card">
            {
                types.map((typeElement, index) => (
                    
                    <p 
                        key={typeElement.type}
                        style={changeStyle(updateBg, index, typeElement.color)}
                    >
                        {typeElement.type}
                    </p>
                    
                ))
            }
        </div>
    );
};

export default CardTypes;