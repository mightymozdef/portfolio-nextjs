import React from 'react'
import { experiences } from '../../utils/data'
// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'

const Experience = () => {
  return (
    <section id="experience" className='py-20 bg-gray-100'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-10'>Experience</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {experiences.map((exp, id) => (
            <div key={id} className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold'>
                {exp.title} ({exp.duration})
              </h3>
              <p className='text-gray-600'>
                {exp.company} - {exp.location}
              </p>
              <p className='mt-2'>{exp.description}</p>
            </div>
          ))}

          {/* <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Job Title 1</h3>
                        <p className="text-gray-600">Company Name - Location</p>
                        <p className="mt-2">Description of responsibilities and achievements in this role.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold">Job Title 2</h3>
                        <p className="text-gray-600">Company Name - Location</p>
                        <p className="mt-2">Description of responsibilities and achievements in this role.</p>
                    </div> */}
          {/* Add more job experiences as needed */}
        </div>
      </div>
    </section>
  )
}

export default Experience
