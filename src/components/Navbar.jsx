import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router';
import { logos } from '../Data';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [active, setActive] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
    }

    const linkClass = "cursor-pointer text-gray-300 hover:text-red-500 transition duration-300";

    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[20vw] ${scrolled ? "bg-[#0b0203] bg-opacity-50 backdrop-blur-md shadow-md " : "bg-transparent"
            }`}>
            <div className='text-white  flex justify-evenly  items-center w-full '>
                <div class="overflow-hidden rounded-full w-17 h-17">
                    <img
                        src={logos.image2}
                        alt="logo"
                        class="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-125 bg-transparent"
                    />
                </div>
                <div className='text-red-700 text-3xl mx-3 font-bold'>
                    PRIYANSHU SHARMA
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <span cla onClick={() => scrollToSection("about")} className={linkClass}>About</span>
                    <span onClick={() => scrollToSection("skills")} className={linkClass}>Skills</span>
                    <span onClick={() => scrollToSection("projects")} className={linkClass}>Projects</span>
                    <span onClick={() => scrollToSection("education")} className={linkClass}>Education</span>
                </div>

                <div className='flex justify-between gap-5 m-5'>
                    <a href="https://github.com/https://www.linkedin.com/in/priyanshu-sharma-a8248b302?utm_source=share_via&utm_content=profile&utm_medium=member_android" target='_blank' rel='noopener' className='hidden md:flex text-gray-300 hover:text-red-500' ><FaLinkedinIn /></a>
                    <a href="https://github.com/Priyanshushr19" target='_blank' rel='noopener' className='hidden md:flex text-gray-300 hover:text-red-500' ><FaGithub /></a>
                </div>
                <div className='md:hidden'>
                    {
                        isOpen ? (
                            <FiX className='text-3xl text-red-500 cursor-pointer ' onClick={() => setIsOpen(false)} />
                        ) : (
                            <FiMenu className='text-3xl text-red-500 cursor-pointer ' onClick={() => setIsOpen(true)} />
                        )
                    }
                </div>
            </div>

            {/* Mobile Items */}

            {
                isOpen && (
                    <div className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 w-4/5
                bg-black/50 backdrop-blur-md z-50
                rounded-lg shadow-lg flex flex-col items-center gap-6 py-6">

                        <span onClick={() => scrollToSection("about")} className={linkClass}>About</span>
                        <span onClick={() => scrollToSection("skills")} className={linkClass}>Skills</span>
                        <span onClick={() => scrollToSection("about")} className={linkClass}>Experience</span>
                        <span onClick={() => scrollToSection("projects")} className={linkClass}>Projects</span>
                        <span onClick={() => scrollToSection("education")} className={linkClass}>Education</span>
                        <div className='flex justify-between gap-5 m-5'>
                            <a href="https://github.com/Priyanshushr19" target='_blank' rel='noopener' className='text-gray-300 hover:text-red-500' ><FaLinkedinIn /></a>
                            <a href="https://github.com/Priyanshushr19" target='_blank' rel='noopener' className=' text-gray-300 hover:text-red-500' ><FaGithub /></a>
                        </div>
                    </div>
                )
            }

        </nav>
    )
}

export default Navbar