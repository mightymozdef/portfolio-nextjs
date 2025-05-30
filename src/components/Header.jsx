import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Header = () => {
  return (
    <header className='bg-gray-800 text-white fixed top-0 left-0 right-0 z-50 shadow-md'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>
          <a href='/'>Moez Bhatti</a>
        </h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <ScrollLink
                to='about'
                spy={true}
                smooth={true}
                offset={-70} // Adjust this value based on your header height
                duration={500}
                className='hover:text-gray-400 cursor-pointer'>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to='experience'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='hover:text-gray-400 cursor-pointer'>
                Experience
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to='projects'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='hover:text-gray-400 cursor-pointer'>
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to='contact'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='hover:text-gray-400 cursor-pointer'>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
