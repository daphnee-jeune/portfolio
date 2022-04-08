import React from 'react'
import { Link } from 'react-scroll'
import Collapsible from 'react-collapsible'

const Navbar = () => {
    return (
        <div className="navbar">
            <>
                Daphnée Jeune
            </>
            <div className="navLinks">
                <Link to="home" smooth={true} duration={1000}>Home</Link>
                <Link to="about" smooth={true} duration={1000}>About</Link>
                <Link to="skills" smooth={true} duration={1000}>Skills</Link>
                <Link to="projects" smooth={true} duration={1000}>Projects</Link>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/daphnee-jeune/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square fa-2x footer-social"></i></a>
                <a href="https://github.com/daphnee-jeune" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square fa-2x footer-social"></i></a>
            </div>

            <Collapsible trigger={<i className="fa fa-bars fa-2x"></i>} className="responsive-menu">
                <div className="navLinks-responsive">
                    <Link to="home" smooth={true} duration={1000}>Home</Link>
                    <Link to="about" smooth={true} duration={1000}>About Me</Link>
                    <Link to="skills" smooth={true} duration={1000}>Skills</Link>
                    <Link to="projects" smooth={true} duration={1000}>Projects</Link>
                </div>

                <div className="social">
                    <a href="https://www.linkedin.com/in/daphnee-jeune/" target="_blank" rel="noopener noreferrer" className="linkedin">LinkedIn</a>
                    <a href="https://github.com/daphnee-jeune" target="_blank" rel="noopener noreferrer" className="github">Github</a>
                </div>

            </Collapsible>

        </div>
    )
}

export default Navbar