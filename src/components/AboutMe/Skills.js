import React from 'react'
import background from "../../assets/background.jpg"


const Skills = () => {
    return (
        <aside className="skills" id="skills">
                <img src={background} alt="technology" className="about-background" />
                <div className="subTitle">Tech stack</div>
                <div className="skillsList">
                <>
                    <span>Javascript</span>
                    <span>React js</span>
                    <span>Typescript</span>
                    <span>GraphQL</span>
                    <span>React testing library</span>
                    <span>SASS</span>
                </>
                </div>
            </aside>
    )
}

export default Skills
