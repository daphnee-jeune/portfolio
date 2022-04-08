import React, { useState } from 'react'
import Project from './Project'

const Projects = () => {
    const ProjectList = [
        {
            id: 1,
            title: "Hulu Clone",
            src: "hulu-clone.png",
            githubLink: "https://github.com/daphnee-jeune/hulu-clone",
            description: "React hooks, Material UI",
            link: "https://hulu-clone-444.netlify.app/"
        },
        {
            id: 3,
            title: "Twitter Clone",
            src: "twitter.png",
            githubLink: "https://github.com/daphnee-jeune/twitter-clone",
            description: "React hooks, Material UI, Firebase",
            link: "https://twitter-ui-react.netlify.app/"
        },
        {
            id: 3,
            title: "Messenger Clone",
            src: "messenger-clone.png",
            githubLink: "https://github.com/daphnee-jeune/fb-messenger-clone",
            description: "React hooks, Material UI, Firebase",
            link: "https://messenger-fbclone.netlify.app/"
        },    
        {
            id: 4,
            title: "Restful API",
            src: "posts-api.png",
            githubLink: "https://github.com/daphnee-jeune/posts-restful-api",
            description: "Node JS, Express, MongoDB, Mongoose",
            link: "https://rest-api-posts.herokuapp.com/posts"
        },
    
        {
            id: 5,
            title: "Trivia Challenge",
            src: "quiz-app.png",
            githubLink: "https://github.com/daphnee-jeune/quiz-app",
            description: "React, Typescript, Styled components",
            link: "https://mytriviachallenge.netlify.app/"
        },
    
        {
            id: 6,
            title: "Job Board",
            src: "jobboard.png",
            githubLink: "https://github.com/daphnee-jeune/job-board",
            description: "React hooks, React Bootstrap",
            link: "https://mynextrole.netlify.app/"
        },
    
        {
            id: 7,
            title: "Spotify UI",
            src: "spotify.png",
            githubLink: "https://github.com/daphnee-jeune/spotify-ui",
            description: "React JS, React Router, SASS",
            link: "https://spotify-layout.netlify.app/"
        }
    
    ]

    const [projects] = useState(ProjectList)

    const listOfProjects = projects.map(project => {
        const { src } = project
   
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
