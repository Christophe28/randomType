import React from 'react';

import { typesElementsPkm, challenger } from '../configs/config';

import colorsByChallenger from '../functions/colorsByChallenger';

const CardChallenger = () => {
    return (
        <div className="container-card-challenger">
           {
            challenger.map((chall) => (
                <ul key={chall.pseudo} style={{color: colorsByChallenger(typesElementsPkm, chall)}}>
                    {chall.name} alias {chall.pseudo}

                    <li>
                        type : {chall.type} 
                    </li>
                    <li>
                        Equipe : 
                        <ul>
                            {
                                chall.team.map((soloPkm, key) => (
                                    <p key={chall.team[key]}>{soloPkm}</p>
                                ))
                            }
                        </ul>
                    </li>
                </ul>
            ))
           }
        </div>
    );
};

export default CardChallenger;