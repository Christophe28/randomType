const randomTrigger = (x, array, setArray, setIsSelected) => {
    const randomNumber = Math.floor(Math.random() * x);
    const arraySplice = array;
    setIsSelected((oldSelected) => {
        const newSelected = [...oldSelected];
        newSelected[randomNumber] = true;
        return newSelected
    })

    const delElem = () => {
        const myTypePkm = prompt("Vos Pokémons seront de types " +  array[randomNumber].type + "! est ce dont vous avez toujours rêvé ?");

        if(myTypePkm === "Oui") {
            setArray(arraySplice.filter(elem => elem !== array[randomNumber]));
        }
        if(myTypePkm === "Non") {
            setIsSelected(array.map((elem) => false));
            randomTrigger(x, array, setArray, setIsSelected);
        }
    }
    setTimeout(delElem, 1500);
}

export default randomTrigger