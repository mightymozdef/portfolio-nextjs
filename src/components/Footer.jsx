import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-4'>
      <div className='container mx-auto text-center'>
        <p>
          &copy; {new Date().getFullYear()} Moez Bhatti. All rights reserved.
        </p>
        <div className='flex justify-center space-x-4'>
          <a
            href='https://www.linkedin.com/in/moez-bhatti/'
            className='hover:text-gray-400'>
            LinkedIn
          </a>
          <a
            href='https://github.com/mightymozdef'
            className='hover:text-gray-400'>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
