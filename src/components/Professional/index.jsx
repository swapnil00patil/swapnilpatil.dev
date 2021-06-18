import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
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
        <Fade bottom duration={1000} delay={800} distance="30px">
          <Title title={title} />
          <Pdf render={({ publicURL }) => <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"
              href={publicURL}
            >
              Resume
            </a>
          } />
        </Fade>
      </Container>
    </section>
  );
};

export default Professional;
