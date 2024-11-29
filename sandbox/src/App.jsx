import './App.css'
// import CustomButtons from './Components/CustomButton'
// import IdentificationCard from './Components/IdentificationCard'
// import IdentificationCard2 from './Components/IdentificationCard2'

// import UserProvider from './Components/ContextIntro/UserProvider'
// import Users from './Components/ContextIntro/Users'
// import CustomUserInterface from './Components/ReducersIntro/CustomUserInterface'

import Shop from './Components/StateDependency/Shop'
function App() {
    return(
        <div className='app-main background text'>
            <p>hello, world</p>
            {/* <CustomButtons/> */}
            {/* <IdentificationCard2 /> */}
            {/* <Users/> */}
            {/* <CustomUserInterface /> */}
            <Shop />
        </div>
    )
}
export default App
