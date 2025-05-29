import React from 'react'

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'>
      <div className='font-bold text-xl mb-2'>{title}</div>
      <p className='text-gray-700 text-base'>{description}</p>
      <a
        href={link}
        className='text-blue-500 hover:text-blue-700 mt-4 inline-block'>
        View Project
      </a>
    </div>
  )
}

export default ProjectCard
