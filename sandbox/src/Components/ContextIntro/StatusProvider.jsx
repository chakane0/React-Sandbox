import {createContext, useState}  from 'react'
export const StatusContext = createContext()

// this component has a status state with a default string value
//useState will return an array of state value, and a state setter function.
// this array is then passed to the value property
export function StatusProvider({children}) {
    const value = useState('set a status')
    return(
        <>
            <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
        </>
    )
}