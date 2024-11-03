import {useState, useEffect} from 'react'
import { Promise } from 'bluebird'

function IdentificationCard2() {
    const [id, setId] = useState('loading ...')
    const [name, setName] = useState('loading ...')
    Promise.config({cancellation: true})

    // This hook expects a function as an argument.
    // The function is called AFTER the component finishes rendering

    useEffect(() => {
        const promise = fetchUser().then(user => {
            setId(user.id)
            setName(user.name)
        })

        // Now, we are returning a function, which React runs when the component is removed
        // This will prevent the component from trying to update its state after it has been removed
        return () => {
            promise.cancel()
        }
    })

    // this function returns a promise
    // the promise resolves an object with 2 properties (could be JSON)
    // the setTimeout delays the promise resolution to mimic an async API call
    function fetchUser() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({id: 1, name: 'Chakane'})
            }, 1000)
        })
    }

    return (
        <>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </>
    )
}

export default IdentificationCard2