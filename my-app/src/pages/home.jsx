import React, { useEffect, useState, useRef } from 'react';
import { useReducer } from 'react';

import CardTypes from '../components/card-types';
import Trigger from '../components/trigger';

import { typesElementsPkm } from '../configs/config';
import PanelTryAgain from '../components/panel-try-again';

const Home = () => {
    const [typesToSelect, setTypesToSelect] = useState(typesElementsPkm);
    const [typeIsSelected, setTypeIsSelected] = useState(typesToSelect.map((type) => false));
    const [currentType, setCurrentType] = useState("");
    const [displayPanel, setDisplayPanel] = useState("none");
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * typesToSelect.length));

    useEffect(() => {
        for(let elem of typeIsSelected) {
            if(elem === true) {
                setCurrentType(typesToSelect[typeIsSelected.indexOf(elem)].type)
            }
        }
        setRandomNumber(Math.floor(Math.random() * typesToSelect.length));
    }, [typeIsSelected])
    
    const ref = useRef(null);
    
    useEffect(() => {
        setTypeIsSelected(typesToSelect.map((type) => false));        
    }, [typesToSelect])
    
    return (
        <div className="container-home">
            <CardTypes
                types={typesToSelect}
                updateBg={typeIsSelected}
                myRef={ref}
            />
            <Trigger
                myEvent={() => {
                    setTypeIsSelected((oldSelected) => {
                        const newSelected = [...oldSelected];
                        newSelected[randomNumber] = true;
                        return newSelected
                    })
                    setDisplayPanel("");
                }}
            />  

            <PanelTryAgain 
                display={displayPanel}
                type={currentType}
                setDisplay={setDisplayPanel}
                setTypeIsSelected={setTypeIsSelected}
                typesToSelect={typesToSelect}
                setTypesToSelect={setTypesToSelect}
            />
        </div>
    );
};

export default Home;