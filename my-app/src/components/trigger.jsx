import changeBackgroundTrigger from '../functions/change-background-trigger';

const Trigger = ({ textTrigger, myEvent, currentType, typesToSelect }) => {

    return (
        <div className="container-trigger">
            <input 
                type="button" 
                value={textTrigger}
                onClick={myEvent}
                style={changeBackgroundTrigger(currentType, typesToSelect)}
            />
        </div>
    );
};

export default Trigger;