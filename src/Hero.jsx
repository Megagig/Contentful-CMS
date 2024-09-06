import React from 'react';
import HeroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            A professional full stack developer skilled in both front-end and
            back-end technologies, with expertise in building dynamic, scalable
            web applications. Proficient in frameworks like React and Node.js,
            along with experience in databases such as MongoDB and PostgreSQL.
            Strong problem-solving abilities and a deep understanding of the
            software development lifecycle. Adept at collaborating with
            cross-functional teams to deliver high-quality solutions.
            Continuously learning and staying updated with the latest industry
            trends and best practices.
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="Personal Porfolio" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
