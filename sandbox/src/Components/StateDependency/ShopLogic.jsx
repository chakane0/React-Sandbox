export const initialState = {
    options: [
        { id: 1, name: 'First', value: 10 },
        { id: 2, name: 'Second', value: 70 },
        { id: 3, name: 'Third', value: 200 }
    ],
    quantity: 1, 
    selected: 1
};

function reduceButtonStates(state) {
    return {
        ...state,
        decrementDisabled: state.quantity === 0,
        incrementDisabled: state.quantity === 10
    };
}

function reduceTotal(state) {
    const option = state.options.find(option => option.id === state.selected);
    return { ...state, total: state.quantity * option.value }
}

export function reducer(state, action) {
    let newState;
    switch(action.type) {
        case 'init':
            newState = reduceTotal(state);
            return reduceButtonStates(state);
        case 'decrementQuantity':
            newState = { ...state, quantity: state.quantity - 1 };
            newState = reduceTotal(newState);
            return reduceButtonStates(newState);
        case 'incrementQuantity':
            newState = { ...state, quantity: state.quantity + 1 };
            newState = reduceTotal(newState);
            return reduceButtonStates(newState);
        case 'selectItem':
            newState = { ...state, selected: Number(action.id) };
            return reduceTotal(newState);
        default:
            throw new Error(`${action.type} is not a valid action`);
    }
}