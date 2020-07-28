import React, { useState } from 'react'
import Project from './Project'

const Projects = () => {
    const ProjectList = [
        {
            id: 1,
            title: "Trivia Challenge",
            src: "quiz-app.png",
            githubLink: "https://github.com/daphnee-jeune/quiz-app",
            description: "React, Typescript, Styled components",
            link: "https://mytriviachallenge.netlify.app/"
        },
        {
            id: 2,
            title: "Job Board",
            src: "jobboard.png",
            githubLink: "https://github.com/daphnee-jeune/job-board",
            description: "React hooks, React Bootstrap",
            link: "https://mynextrole.netlify.app/"
        },    
        {
            id: 3,
            title: "Spotify UI",
            src: "spotify.png",
            githubLink: "https://github.com/daphnee-jeune/spotify-ui",
            description: "React JS, React Router, SASS",
            link: "https://spotify-layout.netlify.app/"
        },
    
        {
            id: 4,
            title: "Blog",
            src: "blog-ui.png",
            githubLink: "https://github.com/daphnee-jeune/blog-ui",
            description: "React hooks, React Router",
            link: "https://hot-topics.netlify.app/"
        },
    
        {
            id: 5,
            title: "Paint App",
            src: "doodle.png",
            githubLink: "https://github.com/daphnee-jeune/paint-app",
            description: "React hooks",
            link: "https://doodles.netlify.app/"
        },
    
        {
            id: 6,
            title: "Snake",
            src: "snake.png",
            githubLink: "https://github.com/daphnee-jeune/snake-game",
            description: "React hooks, DOM manipulation",
            link: "https://snake-snake.netlify.app/"
        },
        
        {
            id: 7,
            title: "Speed-typing Game",
            src: "speedTyping.png",
            githubLink: "https://github.com/daphnee-jeune/speed-typing-game",
            description: "React hooks",
            link: "https://fast-typing.netlify.app/"       
            
        },
    
        {
            id: 8,
            title: "Ecommerce Site",
            src: "ecommerce.png",
            githubLink: "https://github.com/daphnee-jeune/ecommerce",
            description: "React hooks",
            link: "https://buy-a-pic.netlify.app/"
        },
    
        {
            id: 9,
            title: "Note Application",
            src: "note-app.png",
            githubLink: "https://github.com/daphnee-jeune/note-app",
            description: "Context hook API",
            link: "https://jot-it-down.netlify.app/"
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
