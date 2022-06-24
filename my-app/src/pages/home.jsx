import React, { useEffect, useState, useRef } from 'react';

import CardTypes from '../components/card-types';
import Trigger from '../components/trigger';

import randomTrigger from '../functions/randomTrigger';

import { typesElementsPkm } from '../configs/config';


const Home = () => {
    const [typesToSelect, setTypesToSelect] = useState(typesElementsPkm);
    const [typeIsSelected, setTypeIsSelected] = useState(typesToSelect.map((type) => false));
    const [chance, setChance] = useState(0);

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
                    randomTrigger(typesToSelect.length, typesToSelect, setTypesToSelect, setTypeIsSelected);
                }}
            />    
        </div>
    );
};

export default Home;