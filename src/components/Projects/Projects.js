import React, { useState } from 'react'
import Project from './Project'

const Projects = () => {
    const ProjectList = [
        {
            id: 1,
            title: "Tik Tok Clone",
            src: "tiktok.png",
            githubLink: "https://github.com/daphnee-jeune/tiktok-clone",
            description: "React hooks, Material UI, Firebase",
            link: "https://tiktok-clone.netlify.app/"
        },
        {
            id: 2,
            title: "Messenger Clone",
            src: "messenger-clone.png",
            githubLink: "https://github.com/daphnee-jeune/fb-messenger-clone",
            description: "React hooks, Material UI, Firebase",
            link: "https://messenger-fbclone.netlify.app/"
        },    
        {
            id: 3,
            title: "Restful API",
            src: "posts-api.png",
            githubLink: "https://github.com/daphnee-jeune/posts-restful-api",
            description: "Node JS, Express, MongoDB, Mongoose",
            link: "https://rest-api-posts.herokuapp.com/posts"
        },
    
        {
            id: 4,
            title: "Trivia Challenge",
            src: "quiz-app.png",
            githubLink: "https://github.com/daphnee-jeune/quiz-app",
            description: "React, Typescript, Styled components",
            link: "https://mytriviachallenge.netlify.app/"
        },
    
        {
            id: 5,
            title: "Job Board",
            src: "jobboard.png",
            githubLink: "https://github.com/daphnee-jeune/job-board",
            description: "React hooks, React Bootstrap",
            link: "https://mynextrole.netlify.app/"
        },
    
        {
            id: 6,
            title: "Spotify UI",
            src: "spotify.png",
            githubLink: "https://github.com/daphnee-jeune/spotify-ui",
            description: "React JS, React Router, SASS",
            link: "https://spotify-layout.netlify.app/"
        },

        {
            id: 7,
            title: "Paint App",
            src: "doodle.png",
            githubLink: "https://github.com/daphnee-jeune/paint-app",
            description: "React hooks",
            link: "https://doodles.netlify.app/"
        }
    
    ]

    const [projects] = useState(ProjectList) 

    const listOfProjects = projects.map(project => {
    
        const { src } = project

        console.log(src)
        
    
        return (<Project 
                    key={project.id} 
                    title={project.title}
                    tools={project.tools}
                    src={require(`../../assets/${src}`)} 
                    githubLink={project.githubLink} 
                    desc={project.description} 
                    link={project.link} 
        />)
    })
    return (

        <div className="projectContainer" id="projects">
            <div className="subTitle latest">Latest Projects</div>
            <div className="projectList">
                {listOfProjects}
            </div>
        </div>

    )
}

export default Projects
