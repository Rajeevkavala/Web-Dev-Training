import './App.css'
import Card from './components/card'
import Profile from './components/profile'
import image from './assets/unnamed.jpg';


function App() {
  return (
    <>
    <div className="App">
      <h1>Welcome to My Profile Cards</h1>
      <Card title="Profile Card 1">
        <Profile imgUrl={image} name="Rajeev Kavala" role="Software Engineer" alt="Profile Avatar" />
      </Card>
      <Card title="Profile Card 2">
        <Profile imgUrl={image} name="Rahul" role="Web Developer" alt="Profile Avatar" />
      </Card>
    </div>
    </>

  )
}

export default App
