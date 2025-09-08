import React from 'react';

type Person = {
    name: String,
    message: String,
    emoji: String
}

type HelloHelperProps = {
    person: Person;
}

export default function HelloHelper({person} : HelloHelperProps) {
    return (
        <>
        {person.message} {person.name} {person.emoji}
        </>
    )
}
