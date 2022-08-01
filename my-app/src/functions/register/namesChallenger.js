const namesChallenger = (orderChallenger, numberChallenger, setChallenger, pseudo, setOrderChallenger, setPseudo) => {
    if(orderChallenger < numberChallenger) {
        setChallenger((oldChallenger) => {
            const newChallenger = [...oldChallenger];
            newChallenger[orderChallenger] = pseudo;
            return newChallenger;
        })
        setOrderChallenger(orderChallenger + 1);
        setPseudo("");
    }
}

export default namesChallenger