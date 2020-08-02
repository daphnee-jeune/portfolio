import React from 'react'
import profilepic from "../../assets/profilePic.jpg"
import resume from "../../assets/resume.pdf"

const AboutMe = () => {
    return (
        <div className="about-me-wrapper" id="about">
            <div className="subTitle">About</div>
                <section className="about-me">
                    <img src={profilepic} alt="daphnee jeune" className="profilePic" />
                    <p className="description">
                        I am a self-taught front-end engineer with 2 years of experience. Through online resources like Scrimba, Treehouse, Freecodecamp, and many YouTube channels, I learned HTML, CSS, SASS as a pre processor, and Javascript. 
                        In December 2018, I completed a full-stack development bootcamp, <a href="https://acadgild.com/web-development/full-stack-web-development-training-certification" className="acadgild" rel="noopener noreferrer" target="_blank">Acadgild</a>, and there, I was introduced to React Js, Node jS, Express JS, and MongoDB.
                        <br />
                        <br />
                        Using the industry's latest trends, I want to collaborate with a team to create fast, responsive, and dynamic single page applications and enhance the user experience.  
                    </p>
                </section>
                <a href="mailto:daphneejeune.dev@gmail.com"  rel="noopener noreferrer" target="_blank" className="contact-me">Reach Out</a>
                <a rel="noopener noreferrer" target="_blank" href={resume} className="resume">Resumé</a>
            </div>
    )
}

export default AboutMe