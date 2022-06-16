import React from 'react';

const Trigger = ({ myEvent }) => {
    return (
        <div className="container-trigger">
            <input 
                type="button" 
                value="Go random!!!"
                onClick={myEvent}
            />
        </div>
    );
};

export default Trigger;