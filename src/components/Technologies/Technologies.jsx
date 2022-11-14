import React from 'react';
import './Technologies.css';

function Technologies() {
  return (
    <section className="tech">
        <section className="tech-title" id="technologies">
            Technologies
        </section>
        <section className="tech-body">
            I have worked within a range of technologies in the web development world. 
            <br />
            From Back End to Front End.
        </section>

        <br />
        <br />


        <section className="project-seperator">

          <section className="tech-info-left">
            <section className="project_ourSllack projects-subtitle">
              Front-End
            </section>
            <section className="text-body-ourSllack">
              Javascript, React.js
            </section>
          </section>

          <section className="tech-info-center">
           <section className="project_casino projects-subtitle">
            Back-End
           </section>
           <section>
            Java, Spring Boot, Hibernate, Rest API
           </section>
          </section>

          <section className="tech-info-right">
            <section className="project_gogoyugioh projects-subtitle">
              Data
            </section>
            <section>
              MySQL, PostgreSQL
            </section>
          </section>

        </section>

    </section>

    
  )
}

export default Technologies;