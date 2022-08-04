const updateArrayState = (setState, index, newInfo) => {
    setState((oldState) => {
        const newState = [...oldState];
        newState[index] = newInfo;
        return newState
    })
}

export default updateArrayState