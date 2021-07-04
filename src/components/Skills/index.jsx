import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { title, current } = skills;
  return (
    <section id="skills">
      <Container>
        <Title title={title} />
        <div className="wrapper">
          {current && current.map((skill, index) =>
            <div className="cta-btn cta-btn--hero skill" key={index}>{skill}</div>)}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
