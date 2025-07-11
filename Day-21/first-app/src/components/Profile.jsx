import React from 'react'

const imgStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover'
}

const Profile = (props) => {
  return (
    <div className='profile'>
        <img style={imgStyle} src={props.imgUrl} alt={props.alt} />
        <h2>Name: {props.name}</h2>
        <p>Role: {props.role}</p>
    </div>
  )
}

export default Profile;