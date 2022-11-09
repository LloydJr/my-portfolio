import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects">
        <section className="projects-title" id="projects">
            Projects
        </section>
        <section className="projects-body">
          Here some of the projects I have worked on.
        </section>

        <br />
        <br />
        
        <section className="project-seperator">

          <section className="projects-info-left">
            <section className="project_ourSllack projects-subtitle">
              ourSllack
            </section>
            <section className="text-body-ourSllack">
              Text Body
            </section>
          </section>

          <section className="projects-info-center">
           <section className="project_casino projects-subtitle">
            Casino
           </section>
           <section>
            Text Body
           </section>
          </section>

          <section className="projects-info-right">
            <section className="project_gogoyugioh projects-subtitle">
              GogoYugioh
            </section>
            <section>
              Text Body
            </section>
          </section>

        </section>
    </section>
  )
}

export default Projects