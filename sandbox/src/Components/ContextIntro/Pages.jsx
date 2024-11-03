import { useContext } from 'react'
import { UserContext } from './UserProvider'
import { StatusContext } from './StatusProvider'

function SetStatus() {
    const [status, setStatus] = useContext(StatusContext)
    return (
        <>
            <input value={status} onChange={e => setStatus(e.target.value)}/>
        </>
    )
}

export function Status() {
    const [status] = useContext(StatusContext)
    return (
        <>
            <p>{status}</p>
        </>
    )
}

// function Username() {
//     const user = useContext(UserContext)
//     return(
//         <>
//             <p>
//                 Logged in as <strong>{user.name}</strong>
//             </p>
//         </>
//     )
// }
export function Page1() {
    return(
        <>
            <h1>Page 1</h1>
            <SetStatus/>
        </>
    )
}

export function Page2() {
    return(
        <>
            <h1>Page 2</h1>
            {/* <SetStatus/> */}
        </>
    )
}

export function Page3() {
    return(
        <>
            <h1>Page 3</h1>
            <SetStatus/>
        </>
    )
}