import { useReducer, useEffect } from 'react';
import { initialState, reducer } from "./ShopLogic";

export default function Shop() {
    const [
        {
            options, 
            selected, 
            quantity,
            total,
            decrementDisabled,
            incrementDisabled,
        },
        dispatch
    ] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type: 'init'});
    }, []);

    return (
        <>
            <section>
                <button 
                    disabled={decrementDisabled} 
                    onClick={() => dispatch({type: 'decrementQuantity'})}>
                        -
                </button>
                <button 
                    disabled={incrementDisabled} 
                    onClick={() => dispatch({type: 'incrementQuantity'})}>
                        +
                </button>
                <input readOnly value={quantity}></input>
            </section>
            <section>
            <select 
                value={selected} 
                onChange={e => dispatch({ type: 'selectItem', id: Number(e.target.value) })}>
                    {options.map(o => (
                        <option key={o.id} value={o.id}>
                        {o.name}
                        </option>
                    ))}
            </select>

            </section>
            <section>
                <strong>{total}</strong>
            </section>
        </>
    )
}