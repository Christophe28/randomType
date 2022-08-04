import React from 'react';

const MyInput = ({ nameChall, test, onChange }) => {
    return (
        <>
            <input 
                type="text" 
                defaultValue={nameChall}
                onKeyDown={test}
                onChange={onChange}
            />
        </>
    );
};

export default MyInput;