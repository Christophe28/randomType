 import changeStyleCards from "../functions/change-style-cards";

const CardTypes = ({ types, updateBg, myRef, displayPanel }) => {

    return (
        <div className="container-card">
            {
                types.map((typeElement, index) => (
                    
                    <p 
                        ref={myRef}
                        key={typeElement.type}
                        style={changeStyleCards(updateBg, index, typeElement.color, displayPanel)}
                    >
                        {typeElement.type}
                    </p>
                    
                ))
            }
        </div>
    );
};

export default CardTypes;