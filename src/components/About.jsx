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
            I’m an Information Systems undergraduate with a passion for building scalable, user-centric digital solutions...
          </p>
        </div>
      </div>
    </section>
  )
}

export default About