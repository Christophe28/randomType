import React, { useEffect, useState } from 'react';

import CardTypes from '../components/card-types';
import Trigger from '../components/trigger';

import randomTrigger from '../functions/randomTrigger';

import { typesElementsPkm } from '../configs/config';

const Home = () => {
    const [typesToSelect, setTypesToSelect] = useState(typesElementsPkm);
    const [typeIsSelected, setTypeIsSelected] = useState(typesToSelect.map((type) => false));

    return (
        <div className="container-home">
            <CardTypes
                types={typesToSelect}
                updateBg={typeIsSelected}
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