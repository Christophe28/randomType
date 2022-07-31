import React, { useEffect, useState, useRef } from 'react';

import CardTypes from '../components/card-types';
import Trigger from '../components/trigger';
import PanelTryAgain from '../components/panel-try-again';

import { typesElementsPkm } from '../configs/config';

const Home = () => {
    const [typesToSelect, setTypesToSelect] = useState(typesElementsPkm);
    const [typeIsSelected, setTypeIsSelected] = useState(typesToSelect.map((type) => false));
    const [currentType, setCurrentType] = useState("");
    const [displayPanel, setDisplayPanel] = useState("none");
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * typesToSelect.length));
    const [textTrigger, setTextTrigger] = useState("Go random!!!");
    const [lastChoiceByUser, setLastChoiceByUser] = useState("");

    const ref = useRef(null);

    useEffect(() => {
        for(let elem of typeIsSelected) {
            if(elem === true) {
                setCurrentType(typesToSelect[typeIsSelected.indexOf(elem)].type)
            }
        }
        setRandomNumber(Math.floor(Math.random() * typesToSelect.length));
    }, [typeIsSelected])
    
    useEffect(() => {
        setTypeIsSelected(typesToSelect.map((type) => false));        
    }, [typesToSelect])
    
    useEffect(() => {
        lastChoiceByUser === "Oui" ? setTextTrigger("") : setTextTrigger("Go random")
    }, [lastChoiceByUser])

    return (
        <div className="container-home">
            <CardTypes
                types={typesToSelect}
                updateBg={typeIsSelected}
                myRef={ref}
                displayPanel={displayPanel}
            />
            <Trigger
                textTrigger={textTrigger}
                myEvent={() => {
                    setTypeIsSelected((oldSelected) => {
                        const newSelected = [...oldSelected];
                        newSelected[randomNumber] = true;
                        return newSelected
                    })
                    setDisplayPanel("");
                    setTextTrigger("");
                }}
                currentType={currentType}
                typesToSelect={typesToSelect}
            />  

            <PanelTryAgain 
                display={displayPanel}
                type={currentType}
                setDisplay={setDisplayPanel}
                setTypeIsSelected={setTypeIsSelected}
                typesToSelect={typesToSelect}
                setTypesToSelect={setTypesToSelect}
                setLastChoiceByUser={setLastChoiceByUser}
            />
        </div>
    );
};

export default Home;