const changeBackgroundTrigger = (currentType, typesToSelect) => {
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
}

export default changeBackgroundTrigger