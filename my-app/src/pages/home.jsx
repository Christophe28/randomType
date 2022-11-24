import React, { useEffect, useState, useRef } from 'react';
//Commentaire test pour voir si je peux toujours push avec github
//Component
import CardTypes from '../components/card-types';
import Trigger from '../components/trigger';
import PanelTryAgain from '../components/panel-try-again';
import LastPanel from '../components/last-panel';

//config
import { typesElementsPkm } from '../configs/config';

const Home = ({ challenger, allType, setAllType }) => {
    const [typesToSelect, setTypesToSelect] = useState(typesElementsPkm);
    const [typeIsSelected, setTypeIsSelected] = useState(typesToSelect.map((type) => false));
    const [currentType, setCurrentType] = useState("");
    const [displayPanel, setDisplayPanel] = useState("none");
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * typesToSelect.length));
    const [chance, setChance] = useState(2);
    const [currentPlayer, setCurrentPlayer] = useState(0);

    const ref = useRef(null);
    console.log("c'est deployé 2 fois");

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
        if(chance === 0) {
            setCurrentPlayer(currentPlayer + 1);
        }
    }, [chance])

    useEffect(() => {
        if(currentType !== "") {
            if(currentPlayer <= challenger.length) {
                setAllType((oldType) => {
                    const newType = [...oldType];
                    newType[currentPlayer -1] = currentType;
                    return newType
                })
            }
        }
    }, [currentPlayer])
    
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
                    if(chance === 1) {
                        setChance(chance - 1);
                    }
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
                    challenger={challenger}
                    currentPlayer={currentPlayer}
                />
            }
        </div>
    );
};

export default Home;