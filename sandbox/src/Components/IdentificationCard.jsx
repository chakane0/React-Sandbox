import { useState } from 'react'
import './Styles/identification-card.css'

function IdentificationCard() {
    const [age, setAge] = useState(29)
    const [name, setName] = useState('Chakane')

    return (
        <>
            <div className='identification-card'>
                <div className='card-text'>
                    <p>Hello, my name is {name}</p>
                    <p>I am {age} years old</p>
                </div>
                
                <div className='card-input'>
                    <span><input value={name} onChange={e => setName(e.target.value)}></input></span>
                    
                    <span><input type="number" value={age} onChange={e => setAge(e.target.value)}></input></span>
                </div>
                
            </div>
        </>
    )
}

export default IdentificationCard
