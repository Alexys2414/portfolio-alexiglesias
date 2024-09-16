import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Cuándo empezar la animación
  });

  return (
    <section id="about" className={`section about-section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h1>Sobre mí</h1>
      <p>Soy un desarrollador apasionado por crear interfaces web dinámicas y eficientes.</p>
    </section>
  );
};

export default About;
