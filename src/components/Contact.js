import React from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Cuándo empezar la animación
  });

  return (
    <section id="contact" className={`section contact-section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h1>Contacto</h1>
      <p>¡Ponte en contacto conmigo! Estoy disponible para nuevos proyectos y colaboraciones.</p>
    </section>
  );
};

export default Contact;
