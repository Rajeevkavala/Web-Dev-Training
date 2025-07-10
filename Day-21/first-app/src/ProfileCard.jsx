import image from './assets/unnamed.jpg';
import Profile from './Profile';

function avatar(){
  return (
    <img src={image} alt="Profile Avatar" className="avatar" />
  )
}

function ProfileCard() {
  return (
    <div className="profile-card">
      <h2>Profile Card</h2>
      <div className="avatar-container">
        {avatar()}
      </div>
      <div className='Profile-info'>
          <Profile/>
      </div>
    </div>
  )
}

export default ProfileCard;