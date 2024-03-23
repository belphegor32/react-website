import React from 'react';
import "./skill.css";
import Frontend from './FrontendComponent';
import Backend from './BackendComponent';


function Skills(){
    return (
        <sections className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
            </div>
        </sections>
    )
}

export default Skills