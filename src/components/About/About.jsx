import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pdf from "../Pdf";
import PortfolioContext from "../../context/context";
import profile from "../../images/profile.png";

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
            <div className="about-wrapper__image">
              <img
                className="profile-pic rounded shadow-lg"
                alt={"Swapnil Patil Image"}
                src={profile}
              />
            </div>
          </Col>
          <Col md={8} sm={12}>
            <div className="about-wrapper__info">
              <h1 className="hero-title">
                {title || "Hi, my name is"}{" "}
                <span className="text-color-main">{name || "Your Name"}</span>
                <br />
              </h1>
              <p className="about-wrapper__info-text">
                {paragraphOne ||
                  "I`m a Software Engineer with a passion to learn and share about Web Technologies."}
              </p>
              <p className="about-wrapper__info-text">
                {paragraphTwo ||
                  "Years of Experience in Enterprise Web and Hybrid Mobile Applications. I am a techie and I love making cool products."}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
