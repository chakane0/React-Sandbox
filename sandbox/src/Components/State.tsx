import React, {useState} from 'react';

export default function StateHook() {

    // the input and button is encapsulated in a form element
    // the purpose of this, is to only change the p tag once the user hits submit
    // this means we will need 2 state objects

    // this one will update as the user types
    const [name, setName] = React.useState("john doe");

    // this will capture the moment the user hits submit, it will collect the last update of "name"
    const [submittedName, setSubmittedName] = React.useState("")

    // handles the submission of the name input box
    function handleNameSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmittedName(name);
        console.log("subbmitted name" + submittedName);
    }

    return(
        <>
            <form onSubmit={handleNameSubmit}>
                <input value={name} onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value) } />
                <button type="submit">Submit</button>
            </form>
            <p>When i go grocery shopping, i go to: {submittedName}</p>
        </>
    )
}