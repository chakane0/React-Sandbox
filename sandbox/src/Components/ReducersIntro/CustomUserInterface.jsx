import {useReducer} from 'react'
import { Reducer } from './Reducer'

/*
    This component renders 2 fields and 2 labels. when one value changes the corresponding value should change too. 
*/
export default function CustomUserInterface() {

    // the useRender() function takes in 2 arguments. The Reducer argument updates the state and the initial state of the component. 
    // the return value of use reducer() is an array with the state as the first element and the dispatcher function as the second.

    // when we use reducer we only have one object as the state of the component instead of several smaller constants. 
    const [{name, age}, dispatch] = useReducer(Reducer, {})
    return(
        <>
            <input placeholder='Name' value={name} onChange={e => dispatch({type: 'changeName', value: e.target.value})}></input>
            <p>Name: {name}</p>
            <input placeholder='Age' value={age} onChange={e => dispatch({type: 'changeAge', value: e.target.value})}></input>
            <p>Age: {age}</p>

        </>
    )
}

