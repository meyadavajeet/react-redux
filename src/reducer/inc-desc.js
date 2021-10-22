let initalNumber = 10;

const changeTheNumber = (state = initalNumber, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

export default changeTheNumber;