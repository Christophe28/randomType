import React, { useEffect, useState, useRef } from 'react';

//Component
import CardTypes from '../components/card-types';
import Trigger from '../components/trigger';
import PanelTryAgain from '../components/panel-try-again';
import LastPanel from '../components/last-panel';

//config
import { typesElementsPkm } from '../configs/config';

const Home = ({ challenger }) => {
    const [typesToSelect, setTypesToSelect] = useState(typesElementsPkm);
    const [typeIsSelected, setTypeIsSelected] = useState(typesToSelect.map((type) => false));
    const [currentType, setCurrentType] = useState("");
    const [displayPanel, setDisplayPanel] = useState("none");
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * typesToSelect.length));
    const [lastChoiceByUser, setLastChoiceByUser] = useState("");
    const [chance, setChance] = useState(2);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    console.log("chance :", chance);
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

    return (
        <div className="container-home">
            <CardTypes
                types={typesToSelect}
                updateBg={typeIsSelected}
                myRef={ref}
                displayPanel={displayPanel}
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
                currentType={currentType}
                typesToSelect={typesToSelect}
            />  
            
            {
                chance > 1 ? 
                <PanelTryAgain 
                    display={displayPanel}
                    type={currentType}
                    setDisplay={setDisplayPanel}
                    setTypeIsSelected={setTypeIsSelected}
                    typesToSelect={typesToSelect}
                    setLastChoiceByUser={setLastChoiceByUser}
                    currentPlayer={challenger[currentPlayer]}
                    chance={chance}
                    setChance={setChance}
                />  :
                <LastPanel
                    currentType={currentType} 
                    setTypesToSelect={setTypesToSelect}
                    typesToSelect={typesToSelect}
                    setDisplay={setDisplayPanel}
                    display={displayPanel}
                    setChance={setChance}
                />
            }
        </div>
    );
};

export default Home;