import { useState } from 'react'
import IdentificationCard3 from './IdentificationCard3'
function CustomButtons() {
    /*
        This is a button which will display IdentificationCard2 depending on the value of 'show'
        We can click on the "Hide User" button to remove the IdentificationCard2 component.

        Without the cleanup code we added to useEffect, the use of the button will trigger an error:
            Promise.config({cancellation: true})
            
            AND

            return () => {
                promise.cancel()
            }
        


    */
    const [show, setShow] = useState(false)
    
    return (
        <>
            <button onClick={() => setShow(!show)}>{show ? 'Hide User' : 'Show User'}</button>
            {show && <IdentificationCard3/>}
        </>
    )
}

export default CustomButtons