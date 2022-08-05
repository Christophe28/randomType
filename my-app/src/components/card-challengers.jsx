import React from 'react';

import { typesElementsPkm, challenger } from '../configs/config';

import colorsByChallenger from '../functions/colorsByChallenger';

const CardChallenger = ({ testChall, testType}) => {

    const test = (soloType) => {
        for(let elem of typesElementsPkm) {
            if(elem.type === soloType) {
                return <img src={elem.icon} alt="" />
            }
        }
    }
    
    return (
        <div className="container-card-challenger">
           {
            testType.map((soloType, index) => (
                <ul key={soloType} style={colorsByChallenger(typesElementsPkm ,soloType)}>
                    <li>
                        {testChall[index]}
                        <ul>
                            <li>
                                {soloType}  {test(soloType)}
                            </li>
                        </ul>
                    </li>               
                </ul>
            ))
           }
        </div>
    );
};

export default CardChallenger;