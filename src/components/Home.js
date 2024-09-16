import React from 'react';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Cuándo empezar la animación
  });

  return (
    <section id="home" className={`section home-section ${inView ? 'fade-in' : ''}`} ref={ref}>
      <h1>Inicio</h1>
      <p>Bienvenido a mi portfolio.</p>
    </section>
  );
};

export default Home;
