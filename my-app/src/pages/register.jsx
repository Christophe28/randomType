import React from 'react';
import { useState } from 'react';

import { numberParticipants } from '../configs/config';

const Register = ({ challenger, setChallenger }) => {
    const [numberChallenger, setNumberChallenger] = useState(1);
    const [pseudo, setPseudo] = useState();
    const [orderChallenger, setOrderChallenger] = useState(0);
    console.log(challenger);
    return (
        <div className="container-register">
            <h1>Randomiser Pokemon</h1>
            <select name="numberOfParticipant" id="numberOfParticipant" onChange={(e) => setNumberChallenger(e.target.value)}>
                {
                    numberParticipants.map((numberParticipant) => (
                        <option key={numberParticipant}>{numberParticipant}</option>
                    ))
                }
            </select>
            <input 
                type="text" 
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === "Enter") {
                        if(orderChallenger < numberChallenger) {
                            setChallenger((oldChallenger) => {
                                const newChallenger = [...oldChallenger];
                                newChallenger[orderChallenger] = pseudo;
                                return newChallenger
                            })
                            setOrderChallenger(orderChallenger + 1);
                            setPseudo("");
                        }
                    }
                }}
            />
            <input 
                type="button" 
                value="Valider" 
                onClick={() => {
                    if(orderChallenger < numberChallenger) {
                        setChallenger((oldChallenger) => {
                            const newChallenger = [...oldChallenger];
                            newChallenger[orderChallenger] = pseudo;
                            return newChallenger
                        })
                        setOrderChallenger(orderChallenger + 1);
                    }
                }}
            />
            <section className="container-challenger">
                {
                    challenger.map((nameChall, index) => (
                        <ul key={nameChall}>
                            <li>
                                {index + 1}
                                <ul>
                                    <li>{nameChall}</li>
                                </ul>
                            </li>
                        </ul>
                    ))
                }
            </section>
        </div>
    );
};

export default Register;