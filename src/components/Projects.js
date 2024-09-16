import React from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Cuándo empezar la animación
  });

  return (
    <section id="projects" className={`section projects-section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h1>Proyectos</h1>
      <p>Aquí algunos de los proyectos que he desarrollado a lo largo de mi carrera.</p>
    </section>
  );
};

export default Projects;
