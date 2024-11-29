
export function Reducer(state, action) {
    switch(action.type) {
        case 'changeName':
            return {...state, name: action.value}
        case 'changeAge':
            return {...state, age: action.value}
        default:
            throw new Error(`${action.type} is not a valid action`)
    }
}
