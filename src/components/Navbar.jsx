import logo from "../assets/logo.png"
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"
import { Projects } from "./Projects"


export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} alt="" className="mx-2" width={50} height={40} />
            </a>
        </div>
        <div className="m-8 flex bg-a-500 items-center justify-center gap-10 font-semibold text-2xl">
            <a className="text-amber-300 hover:text-white" href="#about">
              About
            </a>
            <a className="text-amber-300 hover:text-white" href="#skills">
              Skills
            </a>
            <a className="text-amber-300 hover:text-white" href="#projects">
              Projects
            </a>
            <a className="text-amber-300 hover:text-white" href="#contact">
              Contact
            </a>
        </div>
    </nav>
  ) 
}
