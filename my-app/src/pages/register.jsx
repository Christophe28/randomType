import React, { useEffect } from 'react';
import { useState } from 'react';

//Config
import { numberParticipants } from '../configs/config';

//Components
import MyInput from '../components/my-input';

//Functions
import namesChallenger from '../functions/register/namesChallenger';

//pictures
import pngUpdate from "../assets/update24px.png";

const Register = ({ challenger, setChallenger }) => {
    const [numberChallenger, setNumberChallenger] = useState(1);
    const [pseudo, setPseudo] = useState([]);
    const [updateName, setUpdateName] = useState();
    const [orderChallenger, setOrderChallenger] = useState(0);
    
    useEffect(() => {
        setUpdateName(challenger.map(() => false))
    }, [challenger])

    const test = (nameChall) => {
        return nameChall
    }
    console.log(updateName);
    return (
        <div className="container-register">
            <h1>Randomiser Pokemon</h1>
            <section className="container-number-challenger">
                <div>
                <p>Choisis le nomber de participants : </p>
                    <select name="numberOfParticipant" id="numberOfParticipant" onChange={(e) => setNumberChallenger(e.target.value)}>
                        {
                            numberParticipants.map((numberParticipant) => (
                                <option key={numberParticipant}>{numberParticipant}</option>
                                ))
                            }
                    </select>
                </div>
                
            </section>
            <section className="container-input">
                <input 
                    type="text" 
                    className="input-text"
                    placeholder="pseudo"
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
                                <td>Challenger {index + 1} : </td>
                                <td>{test(nameChall)}</td>
                                <td><img src={pngUpdate} alt="png" onClick={() => {
                                    setUpdateName((oldUpdate) => {
                                        const newUpdate = [...oldUpdate];
                                        newUpdate[index] = true;
                                        return newUpdate
                                    })
                                }} /></td>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Register;