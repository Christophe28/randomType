import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { typesElementsPkm } from '../configs/config';
import updateArrayState from '../functions/update-array-state';

const CardChallenger = ({ testChall, testType}) => {
    const [currentTest, setCurrentTest] = useState([]);

    const returnPicture = (soloType) => {
        for(let elem of typesElementsPkm) {
            if(elem.type === soloType) {
                return <img src={elem.icon} alt={"icon pkm type :" + soloType} />
            }
        }
    }

    useEffect(() => {
        testChall.map((elem, index) => {
            if(elem.length > 7) {
                const elemSlice = elem.slice(0, 7);
                updateArrayState(setCurrentTest, index, elemSlice)
            }
        })
    }, [])

    return (
        <div className="container-card-challenger">
           {
            testType.map((soloType, index) => (
                <section key={soloType}>
                    <div className="container-picture">
                        {returnPicture(soloType)}
                    </div>
                    <div className="container-challenger">
                        <p> 
                            {
                                testChall[index].length <= 7 ? 
                                testChall[index]
                                :
                                currentTest[index]
                            }   
                        </p>
                    </div>
                </section>
            ))
           }
        </div>
    );
};

export default CardChallenger;