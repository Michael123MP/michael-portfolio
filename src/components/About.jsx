import about from '../assets/about.jpg'

const About = () => {
  return (
    <section id='about' className="border-b border-neutral-900 mt-20 px-6 lg:px-20" data-aos="fade-up" data-aos-duration="500">
      <h2 className="mb-16 text-center text-4xl font-bold text-white">
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 w-full" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">
          <img
            src={about}
            alt="About"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="lg:w-1/2 w-full text-neutral-400 leading-relaxed" data-aos="fade-down" data-aos-duration="1000">
          <p>
            I am passionate about leveraging technology to solve real-world problems and drive organizational efficiency. My academic journey and working experience has equipped me with a strong foundation in programming languages such as Java, C#, Python, and SQL, as well as practical experience with tools like Figma, Visual Paradigm, and Microsoft Excel. Beyond technical proficiency, I’ve had the opportunity to work with various organizations and companies, where I honed essential soft skills including time management, leadership, effective communication, and problem-solving.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About