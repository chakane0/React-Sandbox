// import React, { createContext, useState, useEffect } from 'react';
// import { Page1, Page2, Page3 } from './Pages';

// type company = {
//     company: string;
//     // children: string;
//     // name: string;
    
// }

// export const UserContext = createContext();

// function ChoosePage({ page }) {
//     const Page = [Page1, Page2, Page3];
//     return <Page />
// }

// function fetchCompanies(): Promise<company> {
//     return new Promise (resolve => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 name: 'J.P Morgan & Chase',
//             })
//         }, 1800);
//     });
// };


// export function UserProvider({children}): Promise<company>  {
//     const [company, setCompany] = useState<company>({name: 'loading........'});

//     useEffect(() => {
//         fetchCompanies().then(company => {
//             setCompany(company);
//         })
//     }, [])

//     return (
//         <>
//             <button onClick={() => setPage(0)} disabled={page === 0}>Page1</button>
//             <button onClick={() => setPage(1)} disabled={page === 0}>Page2</button>
//             <button onClick={() => setPage(2)} disabled={page === 0}>Page3</button>
//             <ChoosePage page={page} />
//         </>
        
    
//     )
// }