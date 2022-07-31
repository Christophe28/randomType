import React from 'react';

const Trigger = ({ myEvent, currentType, typesToSelect }) => {

    const backgroundTrigger = () => {
        if(currentType !== ""){
            for(let elem of typesToSelect) {
                if(elem.type === currentType) {
                    const bgTrigger = {
                        background: "url(" + elem.icon + ") no-repeat center center fixed" ,
                    }
                    return bgTrigger
                }
            }
        }
    }
    backgroundTrigger();

    return (
        <div className="container-trigger">
            <input 
                type="button" 
                value="Go random!!!"
                onClick={myEvent}
                style={backgroundTrigger()}
            />
        </div>
    );
};

export default Trigger;