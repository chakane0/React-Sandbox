import { useState } from 'react'
export default function ProcessToDoList() {
    const [objectives, setObjectives] = useState(['beat minecraft hardcore', 'play guitar', 'read react book']);

    return (
        <>
            <div>
                <p>Objectives: {objectives.join(', ')}</p>
            </div>
        </>
    )
}