const goUpdateNames = ( array, index, myInput, namesChallenger) => {
    if(array[index] === true) {
        return myInput
    }
    if(array[index] === false) {
        return namesChallenger
    }
}

export default goUpdateNames