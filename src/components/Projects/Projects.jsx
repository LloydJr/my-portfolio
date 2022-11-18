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
            <section className="projects-subtitle" >
            ourSllack
            </section>
            <section className="text-body-ourSllack">
            In a team of 4, using Java, Spring Boot, MySQL, PostgreSQL React.js, created our own version of a messaging server of Slack.
            </section>
            <br />
            <a href="https://github.com/LloydJr/ourSllackProject" target="_blank" rel="noopener noreferrer">
              To ourSllack GitHub
            </a>
          </section>

          <section className="projects-info-center">
           <section className="projects-subtitle">
            Casino
           </section>
           <section>
           In a team of 6, using Java to create multiple casino games including Blackjack, War, Slots,
Roulette, and CRAPS; personally led implementation of Roulette game.
           </section>
           <br />
            <a href="https://github.com/LloydJr/lloydJrCasino" target="_blank" rel="noopener noreferrer">
              To Casino GitHub
            </a>
          </section>

          <section className="projects-info-right">
            <section className="projects-subtitle">
              GogoYugioh
            </section>
            <section>
             Individually creating a card directory utilizing Java, React, Spring Boot, and MySQL; utilizes an API
by YGOPRODeck.
            </section>
            <br />
            <a href="https://github.com/LloydJr/GoGoYugioh"  target="_blank" rel="noopener noreferrer">
              To GogoYugioh GitHub
            </a>
          </section>

        </section>
    </section>
  )
}

export default Projects