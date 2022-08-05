const colorsByChallenger = (types, typesChallenger) => {
    for(let elem of types) {
        if(elem.type === typesChallenger) {
            const colors = {
                color: elem.color
            }
            return colors
        }
    }
}

export default colorsByChallenger