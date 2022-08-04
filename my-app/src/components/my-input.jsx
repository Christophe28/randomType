import React from 'react';

const MyInput = ({ className, placeholder, value ,nameChall, onKeyDown, onChange }) => {
    return (
        <>
            <input 
                type="text" 
                className={className}
                placeholder={placeholder}
                value={value}
                defaultValue={nameChall}
                onKeyDown={onKeyDown}
                onChange={onChange}
            />
        </>
    );
};

export default MyInput;