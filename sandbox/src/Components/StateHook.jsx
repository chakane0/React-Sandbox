import React, {useState} from 'react';


export default function StateHook() {
    const [name, setName] = React.useState("john doe");

    function handleNameSubmit(e: React.FormEvent<HTMLFormElement>) {
        setName()
    }
    return(
        <>
            <div>
                <input onSubmit={e => setName(e.target.value)} />
                <button type='submit'>Submit</button>
                <p>When i go grocery shopping, i go to: {name}</p>
            </div>
        </>
    )
}