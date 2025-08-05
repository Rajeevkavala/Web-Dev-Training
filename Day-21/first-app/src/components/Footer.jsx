import React from 'react'

const Footer = ({year = new Date().getFullYear()}) => {
  return (
    <footer className='footer'>
      <p>© {year} Rajeev Kavala. All rights reserved.</p>
      <p>Made with ❤️ using React</p>
    </footer>
  )
}

export default Footer