import {useEffect, useState} from 'react'
import {Promise} from 'bluebird'

function IdentificationCard3() {
    const [id, setId] = useState('loading ...')
    const [name, setName] = useState('loading ... ')

    Promise.config({cancellation:true})
    function fetchUser() {
        console.count('fetching user')
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({id:1, name:'Adam'})
            }, 1000)
        })
    }

    useEffect(() => {
        const promise = fetchUser().then(user => {
            setId(user.id)
            setName(user.name)
        })
        return () => {
            promise.cancel()
        }
        // The [] represents a second argument for useEffect
        // This tell React that theres no values to watch and that we only want the run the cleanup code when the component is removed
        // If removed, you may notice the fetchUser is going to be called several times
    }, [])

    return (
        <>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
        </>
    )
}
export default IdentificationCard3