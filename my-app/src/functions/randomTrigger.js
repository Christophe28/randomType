const randomTrigger = (x, array, display, setArray, setIsSelected, setDisplayPanel, tryAgain, currentType, currentChance, setCurrentChance) => {

    const randomNumber = Math.floor(Math.random() * x);
    const arraySplice = array;

    if(display === "none"){
        setIsSelected((oldSelected) => {
            const newSelected = [...oldSelected];
            newSelected[randomNumber] = true;
            return newSelected
        })
    }
    
    const delElem = () => {
        setDisplayPanel("");
        
        if(tryAgain === "Non") {
            setArray(arraySplice.filter(elem => elem !== currentType));
            setDisplayPanel("none");
        }
        if(tryAgain === "Oui") {
            setIsSelected(array.map((elem) => false));
            setDisplayPanel("none");
            setCurrentChance(currentChance + 1);   
        }

    }
    
    if(currentChance < 1) {
        setTimeout(delElem, 1500);
    }


}

export default randomTrigger