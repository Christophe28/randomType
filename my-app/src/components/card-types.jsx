 import changeStyleCards from "../functions/change-style-cards";

const CardTypes = ({ types, updateBg, myRef, displayPanel }) => {
    // style={{
    //     backgroundImage: `url(${typeElement.icon})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "40px 40px",
    //     backgroundSize: "contain"
    // }}
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