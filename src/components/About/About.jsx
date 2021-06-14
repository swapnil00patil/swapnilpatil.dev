import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImg from '../Image/AboutImg';
import Pdf from '../Pdf'
import PortfolioContext from '../../context/context';

const About = () => {
  const { about, hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Row className="about-wrapper">
          <Col md={4} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={8} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <h1 className="hero-title">
                  {title || 'Hi, my name is'}{' '}
                  <span className="text-color-main">{name || 'Your Name'}</span>
                  <br />
                </h1>
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I`m a Software Engineer with a passion to learn and share about Web Technologies.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    '12 years of Experience in Enterprise Web and Hybrid Mobile Applications. I am a techie and I love making cool products.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <Pdf render={({ publicURL }) => <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href={publicURL}
                      >
                        Resume
                      </a>
                    } />

                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
