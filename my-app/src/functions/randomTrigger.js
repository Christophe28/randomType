const randomTrigger = (x, array, setArray, setIsSelected) => {
    const randomNumber = Math.floor(Math.random() * x);
    const arraySplice = array;
    // setArray(arraySplice.filter(elem => elem !== array[randomNumber]));
    setIsSelected((oldSelected) => {
        const newSelected = [...oldSelected];
        newSelected[randomNumber] = true;
        return newSelected
    })
}

export default randomTrigger