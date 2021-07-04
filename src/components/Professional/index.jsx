import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Pdf from '../Pdf';

const Professional = () => {
  const { professional } = useContext(PortfolioContext);
  const { title } = professional;
  return (
    <section id="professional">
      <Container>
        <Title title={title} />
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn--hero"
          href='/resume.pdf'
        >
          Resume
        </a>
      </Container>
    </section>
  );
};

export default Professional;
