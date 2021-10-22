export const incrementNumber = (nun) => {
    return {
        type: 'INCREMENT',
        payload: nun
    }
}

export const decrementNumber = () => {
    return {
        type: 'DECREMENT'
    }
}