import UserProvider from "./UserProvider"
import { Page1, Page2, Page3 } from "./Pages"
import {useState} from 'react'
import { StatusProvider } from "./StatusProvider"

// this component renders the <UserProvider.Provider> component, which passes any children it receives
// by using the <UseProvider/> component, the fetchUserAPI is called when its rendered
// useContent Hook is used in <Page />
// this this case the useContext value is actually the state value set by UserProvider component
// this means that user context value is updated by useContext()hook whenever the user value changes

function ChoosePages({page}) {
    const Page = [Page1, Page2, Page3][page]
    return <Page />
}

function Users() {
    const [page, setPage] = useState(0)
    return(
        <>
            <StatusProvider>
                <button onClick={() => setPage(0)} disabled={page === 0}>Page 1</button>
                <button onClick={() => setPage(1)} disabled={page === 1}>Page 2</button>
                <button onClick={() => setPage(2)} disabled={page === 2}>Page 3</button>
                <ChoosePages page={page} />
            </StatusProvider>
        </>
    )
}

export default Users
