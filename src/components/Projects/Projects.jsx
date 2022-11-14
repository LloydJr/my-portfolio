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
            In a team of 4, using Java, Spring Boot, MySQL, PostgreSQL React.js, created our own version of a messaging server of Slack.
            </section>
          </section>

          <section className="projects-info-center">
           <section className="project_casino projects-subtitle">
            Casino
           </section>
           <section>
           In a team of 6, using Java to create multiple casino games including Blackjack, War, Slots,
Roulette, and CRAPS; personally led implementation of Roulette game.
           </section>
          </section>

          <section className="projects-info-right">
            <section className="project_gogoyugioh projects-subtitle">
              GogoYugioh
            </section>
            <section>
             Individually creating a card directory utilizing Java, React, Spring Boot, and MySQL; utilizes an API
by YGOPRODeck.
            </section>
          </section>

        </section>
    </section>
  )
}

export default Projects