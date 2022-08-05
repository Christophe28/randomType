import React, { useEffect } from 'react';
import { useState } from 'react';

//Config
import { numberParticipants } from '../configs/config';

//Components
import MyInput from '../components/my-input';
import NextPage from '../components/next-page';
import MyTable from '../components/my-table';

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
    const [updateName, setUpdateName] = useState([]);
    const [orderChallenger, setOrderChallenger] = useState(0);
    
    console.log(challenger);
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
                    <select 
                        name="numberOfParticipant" 
                        id="numberOfParticipant" 
                        onChange={(e) => {setNumberChallenger(parseInt(e.target.value))}}
                    >
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
            <MyTable
                challenger={challenger}
                updateName={updateName}
                setChallenger={setChallenger}
                newPseudo={newPseudo}
                setUpdateName={setUpdateName}
                setNewPseudo={setNewPseudo}
                pngUpdate={pngUpdate} 
            />
            {
                returnNavLink()  
            }
        </div>
    );
};

export default Register;