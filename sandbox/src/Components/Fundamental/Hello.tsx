import React from 'react';
import HelloHelper from "./HelloHelper"


// needed for typescript to give types to the data were consuming
type Person = {
    name: string,
    message: string,
    emoji: string
}

// raw data
const person: Person[] = [
    {
        name: "Jake", 
        message: "Hello, to you!",
        emoji:"👌",
    },
    {
        name: "Rob", 
        message: "Hello, to you too!",
        emoji:"🖐️",
    },

]

// This function maps through the mock data and passes it into the Helper Component which renders the data. 
export default function Hello() {
    return (
        <div>
            <h1>
                {person.map((p, index) => (
                    <li>
                        <HelloHelper key={index} person={p} />
                    </li>  
                ))}
            </h1>
        </div>
    )
}


