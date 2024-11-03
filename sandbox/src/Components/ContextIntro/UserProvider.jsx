import { createContext, useState, useEffect } from 'react'

// setting up context
export const UserContext = createContext()

// mocks an API call
function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({id:1, name:'Adam'})
        }, 1000)
    })
}

// calls fetchUser() API and sets the user state as the response from the API
// were utilizing useState and useEffect to do this

function UserProvider({children}) {
    const [user, setUser] = useState({name: '...'})
    useEffect(() => {
        fetchUser().then(user => {
            setUser(user)
        })
    }, [])
    
    return(
        <>
            <UserContext.Provider value={user}>{children}</UserContext.Provider>
        </>
    )
}
export default UserProvider