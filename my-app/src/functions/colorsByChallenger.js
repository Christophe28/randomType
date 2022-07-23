const colorsByChallenger = (types, challenger) => {
    for(let elem of types) {
        if(elem.type === challenger.type) {
            return elem.color
        }
    }
}

export default colorsByChallenger