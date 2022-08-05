import React from 'react';
import CardChallenger from '../components/card-challengers';

const MyTypes = ({ challenger, type }) => {
    
    return (
        <div className="container-my-types">
            <h1>Challenger</h1>
            <CardChallenger
                testChall={challenger}
                testType={type}
            />
        </div>
    );
};

export default MyTypes;