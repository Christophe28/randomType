import changeBackgroundTrigger from '../functions/change-background-trigger';

import pkb from "../assets/icon-classic-pkb-128px.png"

const Trigger = ({ myEvent, currentType, typesToSelect }) => {

    return (
        <div className="container-trigger">
            <input 
                type="button" 
                onClick={myEvent}
                style={changeBackgroundTrigger(currentType, typesToSelect, pkb)}
            />
        </div>
    );
};

export default Trigger;