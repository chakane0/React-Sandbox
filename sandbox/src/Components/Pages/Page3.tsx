import { UserContext } from "../contextHooks"
import { useContext } from 'react';


function Username() {
    const user = useContext(UserContext);
    return (
        <p>Logged in as <strong>{user.name}</strong></p>
    )
}

export function Page3() {
    return (
        <>
            <h1>Page 3 </h1>
            <Username />
        </>
    )
}