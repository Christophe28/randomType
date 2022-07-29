const CardTypes = ({ types, updateBg, myRef }) => {

    const changeStyle = (array, index, color) => {
        if(array[index] === true) {
            const trueStyle = {
                background: "white",
                color: color
            }
            return trueStyle
        }
        else {
            const falseStyle = {
                background: color,
                color: "white"
            }
            return falseStyle
        }
    }

    return (
        <div className="container-card">
            {
                types.map((typeElement, index) => (
                    
                    <p 
                        ref={myRef}
                        key={typeElement.type}
                        style={changeStyle(updateBg, index, typeElement.color)}
                    >
                        {typeElement.type} = {index}
                    </p>
                ))
            }
        </div>
    );
};

export default CardTypes;