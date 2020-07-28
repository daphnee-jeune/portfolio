import React from 'react'

const Project = ({title, src, githubLink, desc, link}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project">
            <p className="desc">{desc}</p>
            <img src={src} alt="" className="projectImg" />

            <h1 className="post-title">{title}</h1>

            <a href={githubLink} target="_blank" rel="noopener noreferrer">Github Link</a>
        </a>
    )
}

export default Project
