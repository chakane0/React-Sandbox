/*
    1. Setup UI of app
        a. center a input text box
        b. Below create a square where objectives are numbered
        c. show that the user can add new items or delete new items
        d. be able to modify items

    2. how would data handling work?
        a. we can use State to hold an array of items. If a user enters one objective, then that will get added to state and we'll use that in our rendering.

        b. make the input only do something when the user clicks a button
*/

import { useState } from 'react';

export default function ToDoList() {
    const [objectives, setObjective] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function addObjective() {
        if(inputValue.trim() !== '') {
            setObjective([...objectives, inputValue]);
            setInputValue('');
        }
    }

    function removeObjective() {
        console.log()
        // for(let i = 0; i < objectives.length; i++) {
        //     console.log(objectives[i]);
        // }
    }

    return (
        <>
            <section>
                <label>Enter an objective:</label>
                <input 
                    type='text' 
                    value={inputValue} 
                    id='userInputBox' 
                    onChange={(e) => setInputValue(e.target.value)}>
                </input>
                <button onClick={addObjective}>Add</button>
            </section>
            <section>
                <label>Objectives:</label>
                <ul>
                    {objectives.map((objective, index) => (
                        <li key={index} value={objective} onClick={removeObjective}>{objective}</li>
                    ))}
                </ul>
            </section>
        </>
    )
}