import './App.css'
import Greeting from './Greeting'
import Header from './header'
import Profile from './Profile'
import ProfileCard from './ProfileCard'

function App() {

  return (
    <>
      <Header/>
      <Profile name='Rajeev' age={21}/>
      <ProfileCard />
    </>
  )
}

export default App
