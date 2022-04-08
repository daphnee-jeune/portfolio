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
                        I am a software engineer with 2 years of professional experience. I am passionate about sleek UIs and solving problems on the front end. I solve problems with Javascript, React js, Typescript, GraphQL, and SASS. 
                        <br />
                        <br />
                        Using the industry's latest trends, I want to collaborate with a team to create fast, responsive, and dynamic single page applications and enhance the user experience and overall, provide value.  
                    </p>
                </section>
                <a href="mailto:daphneejeune.dev@gmail.com"  rel="noopener noreferrer" target="_blank" className="contact-me">Reach Out</a>
                <a rel="noopener noreferrer" target="_blank" href={resume} className="resume">Resumé</a>
            </div>
    )
}

export default AboutMe