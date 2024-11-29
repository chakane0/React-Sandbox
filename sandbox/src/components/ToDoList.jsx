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


export default function ToDoList() {
    return (
        <>
            <section>
                <label>Enter an objective:</label>
                <input type='text' id='userInputBox'></input>
                <button onClick={}>Add</button>
            </section>
            <section>
                <label>Objectives:</label>
            </section>
        </>
    )
}