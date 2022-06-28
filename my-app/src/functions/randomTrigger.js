const randomTrigger = (x, array, setArray, setIsSelected, currentChance, setCurrentChance) => {
    const randomNumber = Math.floor(Math.random() * x);
    const arraySplice = array;
    setIsSelected((oldSelected) => {
        const newSelected = [...oldSelected];
        newSelected[randomNumber] = true;
        return newSelected
    })

    const delElem = () => {
        // if(currentChance < 1) {
            const myTypePkm = prompt("Vos Pokémons seront de types " +  array[randomNumber].type + "! est ce dont vous avez toujours rêvé ?");

            if(myTypePkm === "Oui") {
                setArray(arraySplice.filter(elem => elem !== array[randomNumber]));
            }
            if(myTypePkm === "Non") {
                setIsSelected(array.map((elem) => false));
                setCurrentChance(currentChance + 1)
                //Problème avec la fonctione qui s'appelle elle même. Pas top top à check pour améliorer.
                // randomTrigger(x, array, setArray, setIsSelected, currentChance, setCurrentChance);       
            }
        // }
    }
    setTimeout(delElem, 1500);
}

export default randomTrigger