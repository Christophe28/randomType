import React from 'react';

const Test = () => {
    const types = ["Feu", "Dragon", "Eau", "Air"];

    return (
        <div>
            {
                types.map((type, index) => (
                    <p index={index}>{type}</p>
                ))
            }
            <button onClick={() => console.log("yo")}>Animation</button>
        </div>
    );
};

export default Test;