import React from 'react'
import { projects } from '../../utils/data'
import ProjectCard from '../ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className='py-12'>
      <h2 className='text-3xl font-bold text-center mb-8'>Projects</h2>
      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
