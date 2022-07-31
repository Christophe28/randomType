const changeStyleCards = (array, index, color, displayPanel) => {
    if(array[index] === true) {
        const trueStyle = {
            background: "white",
            color: color
        }
        return trueStyle
    }
    else {
        if(displayPanel === "none") {
            const falseStyleNone = {
                background: color,
                color: "white"
            }
            return falseStyleNone
        }
        if(displayPanel === ""){
            const falseStyle = {
                background: color,
                color: "white",
                opacity: "0.5"
            }
            return falseStyle
        }
    }
}

export default changeStyleCards