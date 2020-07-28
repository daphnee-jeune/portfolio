import React from 'react'
import background from "../../assets/background.jpg"


const Skills = () => {
    return (
        <aside className="skills" id="skills">
                <img src={background} alt="technology" className="about-background" />
                <div className="subTitle">Skills</div>
                <ul className="skillsList frontend">
                    <h2>Front End</h2>
                    <li>Typescript</li>
                    <li>Redux</li>
                    <li>React JS</li>
                    <li>ES6</li>
                    <li>SASS</li>
                    <li>CSS (Flexbox & Grid)</li>
                    <li>HTML</li>
                </ul>
                <ul className="skillsList backend">
                    <h2>Server</h2>
                    <li>NPM</li>
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>GraphQL</li>
                </ul>
                <ul className="skillsList database">
                    <h2>Database</h2>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                </ul>
            </aside>
    )
}

export default Skills