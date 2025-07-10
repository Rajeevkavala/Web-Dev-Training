import React from 'react'
function Profile({ name = "Anonymous", age = 18 }) {
  return <p>{name} is {age} years old.</p>;
}

export default Profile;