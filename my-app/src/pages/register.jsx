import React, { useEffect } from 'react';
import { useState } from 'react';

//Config
import { numberParticipants } from '../configs/config';

//Components
import MyInput from '../components/my-input';
import NextPage from '../components/next-page';

//Functions
import namesChallenger from '../functions/register/namesChallenger';
import goUpdateNames from '../functions/register/go-update-names';
import updateArrayState from '../functions/update-array-state';

//pictures
import pngUpdate from "../assets/update24px.png";

const Register = ({ challenger, setChallenger }) => {
    const [numberChallenger, setNumberChallenger] = useState(1);
    const [pseudo, setPseudo] = useState("");
    const [newPseudo, setNewPseudo] = useState("");
    const [updateName, setUpdateName] = useState();
    const [orderChallenger, setOrderChallenger] = useState(0);
    
    useEffect(() => {
        setUpdateName(challenger.map(() => false))
    }, [challenger])

    const returnNavLink = () => {
        if(challenger.length === numberChallenger) {
            return <NextPage />
        }
    }

    return (
        <div className="container-register">
            <h1>Randomiser Pokemon</h1>
            <section className="container-number-challenger">
                <div>
                <p>Choisis le nomber de participants : </p>
                    <select name="numberOfParticipant" id="numberOfParticipant" onChange={(e) => {setNumberChallenger(parseInt(e.target.value))}}>
                        {
                            numberParticipants.map((numberParticipant) => (
                                <option key={numberParticipant}>{numberParticipant}</option>
                                ))
                            }
                    </select>
                </div>
                
            </section>
            <section className="container-input">
                <MyInput
                    className={"input-text"}
                    placeholder={"pseudo"}
                    value={pseudo}
                    onChange={(e) => setPseudo(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            namesChallenger(orderChallenger, numberChallenger, setChallenger, pseudo, setOrderChallenger, setPseudo);
                        }
                    }}
                />
                <input 
                    type="button" 
                    className="validate"
                    value="Valider" 
                    onClick={() => {
                            namesChallenger(orderChallenger, numberChallenger, setChallenger, pseudo, setOrderChallenger, setPseudo);       
                    }}
                />
            </section>
            <section className="container-challenger">
                <table>
                    <thead>
                        <tr>
                            <th colSpan="3">Challengers</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        challenger.map((nameChall, index) => (                            
                            <tr key={nameChall + index}>
                                <td className="long-side">Challenger {index + 1} : </td>
                                <td className="long-side">
                                    {
                                        goUpdateNames(
                                            updateName, 
                                            index, 
                                            <MyInput
                                                nameChall={nameChall}
                                                onKeyDown={(e) => {
                                                    if(e.key === "Enter") {
                                                        updateArrayState(setChallenger, index, newPseudo);
                                                        updateArrayState(setUpdateName, index, false);
                                                    }
                                                    if(e.key === "Escape") {
                                                        updateArrayState(setUpdateName, index, false);
                                                    }
                                                    
                                                }}
                                                onChange={(e) => {
                                                    setNewPseudo(e.target.value);
                                                }}
                                            />, 
                                            nameChall
                                        )
                                    }
                                </td>
                                <td><img src={pngUpdate} alt="png update" onClick={() => {
                                    updateArrayState(setUpdateName, index, true);
                                }} /></td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
            {
                returnNavLink()  
            }
        </div>
    );
};

export default Register;