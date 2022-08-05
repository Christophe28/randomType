const changeBackgroundTrigger = (currentType, typesToSelect, pkb) => {
    if(currentType !== ""){
        for(let elem of typesToSelect) {
            if(elem.type === currentType) {
                if(elem.type !== "Insecte"){
                    const bgTrigger = {
                        background: "url(" + elem.icon + ") no-repeat center"
                    }
                    return bgTrigger
                }
                if(elem.type === "Insecte") {
                    const bgTrigger = {
                        background: `url(${elem.icon})`,
                        backgroundSize: "contain"
                    }
                    return bgTrigger
                }
            }
        }
    }
    const bgTrigger = {
        background: "url(" + pkb + ") no-repeat center"
    }
    return bgTrigger
}

export default changeBackgroundTrigger