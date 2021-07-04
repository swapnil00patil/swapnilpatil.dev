import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

import fergusson from '../../images/fergusson-college.jpeg'
import pune from '../../images/pune.jpeg'
import singapore from '../../images/singapore.jpeg'
import village from '../../images/village.jpeg'

const Journey = () => {
  const { journey } = useContext(PortfolioContext);
  const { title, current } = journey;
  return (
    <section id="journey">
      <Container>
        <Title title={title} />
        <div className="wrapper">
          <div className="journey-box">
            <div className="journey-title">Home Town</div>
            <img className="journey-img" src={village} />
          </div>
          <div className="arrow">&rarr;</div>
          <div className="journey-box">
            <div className="journey-title">College</div>
            <img className="journey-img" src={fergusson} />
          </div>
          <div className="arrow">&rarr;</div>
          <div className="journey-box">
            <div className="journey-title">Pune</div>
            <img className="journey-img" src={pune} />
          </div>
          <div className="arrow">&rarr;</div>
          <div className="journey-box">
            <div className="journey-title">Singapore</div>
            <img className="journey-img" src={singapore} />
          </div>
          <div className="arrow">&rarr;</div>
          <div className="journey-box">
            <div className="journey-question">??</div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Journey;
