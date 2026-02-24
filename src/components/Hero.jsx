import profile from "../assets/profile.png"
import { MdFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 }}
}

const Hero = () => {
  return (

    <div className="pb-5 lg:mb-32">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-7">
                    <motion.img 
                    src={profile} 
                    className=" border-stone-900 rounded-3xl" 
                    width={350}
                    height={650}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }} />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <motion.div
                initial="hidden" 
                animate="visible"
                variants={containerVariants}
                className="flex flex-col items-center lg:items-start mt-10">
                    <motion.h2 variants={childVariants} className="pb-2 text-3xl tracking-tighter lg:text-6xl text-amber-400">Michael Pagardin</motion.h2>
                    <motion.span ariants={childVariants} className="bg-stone-300 bg-clip-text tracking-tight text-transparent mt-4 lg:text-3xl">I'm a <span>Programmer </span></motion.span>
                    <motion.p ariants={childVariants} className="my-1 max-w-lg py-7 text-xl text-justify">
                        As a highly motivated candidate pursuing a master's degree in Information Systems Management. Michael is proficient in information technology field by mastering several programming languages. Michael has gained experienced in working at organizations and companies that honed his abilities in time management, communication skills, problem-solving skills, and project management skills
                    </motion.p>
                    <div className="flex bg-a-500 gap-4 text-2xl mb-5">
                    <a className="text-amber-300" href="https://www.linkedin.com/in/michael-pagardin-a2314a176/">
                    <FaLinkedin/>
                    </a>
                    <a className="text-amber-300" href="https://github.com/Michael123MP">
                    <FaGithub/>
                    </a>
                    <a className="text-amber-300" href="https://www.instagram.com/mp02_09_04/">
                    <FaInstagram/>
                    </a>
                    </div>
                    <motion.a ariants={childVariants} href="" className="flex items-center gap-1 bg-amber-400 font-semibold rounded-full p-5 text-sm text-black mb-15 hover:bg-amber-300">
                       <MdFileDownload /> Download My CV 
                    </motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero
