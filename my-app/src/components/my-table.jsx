import React from 'react';

import MyInput from './my-input';

import goUpdateNames from '../functions/register/go-update-names';
import updateArrayState from '../functions/update-array-state';

const MyTable = ({ challenger, updateName, setChallenger, newPseudo, setUpdateName, setNewPseudo, pngUpdate }) => {
    
    return (
        <div className="container-challenger">
            <table>
                <thead>
                    <tr>
                        <th colSpan="3">Challenger</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        challenger.map((nameChall, index) => (
                            <tr key={nameChall + index}>
                                <td className="long-side">Challenger {index + 1} :</td>
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
                                }}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyTable;