import tool from '../assets/Tools.js'

const Skills = () => {
  return (
    <div id='skills' className='mt-30'>
      <h1 className='text-4xl font-bold text-white mb-3' data-aos="fade-up" data-aos-duration="1000">Skills</h1>
      <div className='tool-box mt-15 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
            {tool.map((tool) => (
                <div className='flex items-start gap-2 border-zinc-800 border hover:bg-zinc-900 rounded-md' key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                    <img src={tool.gambar} className='w-15 bg-zinc-800 p-2 hover:bg-zinc-900' />
                    <div>
                        <h4 className='flex font-semibold'>{tool.nama}</h4>
                        <p className='opacity-80 flex'>{tool.ket}</p>
                    </div>
                </div>
            ))}
      </div>
    </div>
  )
}

export default Skills
