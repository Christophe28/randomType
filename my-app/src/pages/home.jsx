import React, { useEffect, useState, useRef } from 'react';

import CardTypes from '../components/card-types';
import Trigger from '../components/trigger';

import randomTrigger from '../functions/randomTrigger';

import { typesElementsPkm } from '../configs/config';
import PanelTryAgain from '../components/panel-try-again';


const Home = () => {
    const [typesToSelect, setTypesToSelect] = useState(typesElementsPkm);
    const [typeIsSelected, setTypeIsSelected] = useState(typesToSelect.map((type) => false));
    const [currentType, setCurrentType] = useState("");
    const [tryAgain, setTryAgain] = useState("");
    const [chance, setChance] = useState(0);
    const [displayPanel, setDisplayPanel] = useState("none");

    useEffect(() => {
        typeIsSelected.map((trueType) => {
            if(trueType === true) {
                setCurrentType(typesToSelect[typeIsSelected.indexOf(trueType)].type);
            }
        })
        
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
                    randomTrigger(typesToSelect.length, typesToSelect, displayPanel, setTypesToSelect, setTypeIsSelected, setDisplayPanel, tryAgain, currentType, chance, setChance);
                }}
            />  

            <PanelTryAgain 
                display={displayPanel}
                type={currentType}
                updateChoice={(e) => {
                        setTryAgain(e.target.value)
                        randomTrigger(typesToSelect.length, typesToSelect, displayPanel, setTypesToSelect, setTypeIsSelected, setDisplayPanel, tryAgain, currentType, chance, setChance);
                    }
                }
            />
        </div>
    );
};

export default Home;