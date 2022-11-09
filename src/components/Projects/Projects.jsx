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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ipsa rem quae dolorem consequatur tempore impedit deserunt ex velit delectus, odio, quod modi atque sit, iusto in voluptatum quos excepturi!
            </section>
          </section>

          <section className="projects-info-center">
           <section className="project_casino projects-subtitle">
            Casino
           </section>
           <section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, culpa distinctio iusto enim officiis fugit accusantium quis dicta in eos earum nulla quos recusandae totam nobis voluptatum aliquam tempore architecto!
           </section>
          </section>

          <section className="projects-info-right">
            <section className="project_gogoyugioh projects-subtitle">
              GogoYugioh
            </section>
            <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veniam architecto facere natus, molestias iste totam obcaecati a praesentium quo alias voluptatibus laudantium maxime quam sit? Reprehenderit commodi iste quia!
            </section>
          </section>

        </section>
    </section>
  )
}

export default Projects