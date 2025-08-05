import React from 'react'

const imgStyle = {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    objectFit: 'cover'
}

const Profile = (props) => {
  return (
    <div className='profile'>
        <img style={imgStyle} src={props.imgUrl} alt={props.alt} />
        <h2>Name: {props.name}</h2>
        <p><b>Role:</b> {props.role}</p>
        <p><b>Description:</b> {props.desc}</p> 
    </div>
  )
}

export default Profile;