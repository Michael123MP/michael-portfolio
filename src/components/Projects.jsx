import React from 'react'
import projects from '../assets/Projects.js'

export const Projects = () => {
  return (
    <div id='projects' className='projects mt-30'>
      <h1 className='text-4xl font-bold mb-3 text-white' data-aos="fade-up" data-aos-duration="1000">Projects</h1>
      <div className='tool-box mt-15 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {projects.map((projects) => (
                <div className='bg-zinc-900 rounded-md p-5' key={projects.id} data-aos="fade-down" data-aos-duration="1000" data-aos-delay={projects.dad}>
                    <img src={projects.gambar} />
                    <div>
                        <h4 className='my-3 font-bold text-2xl text-start'>{projects.nama}</h4>
                        <p className='mb-4 text-base/loose text-start'>{projects.desk}</p>
                    </div>
                    <div className='mt-7 text-center'>
                        <a href={projects.link} className='bg-amber-400 p-3 block rounded-lg border border-zinc-500 hover:bg-amber-200 text-white'>See Project</a>
                    </div>
                </div>
            ))}
      </div>
    </div>
  )
}
