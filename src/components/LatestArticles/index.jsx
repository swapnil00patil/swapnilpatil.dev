import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Col } from 'react-bootstrap';
import Title from '../Title/Title';

const formatDate = (pubDate) => {
  var options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  return new Date(pubDate).toLocaleDateString("en", options)
}

const LatestArticles = () => (
  <StaticQuery
    query={graphql`
      query {
        allFeedAroundCode(limit: 5, filter: { creator: { eq: "Swapnil Patil" } }) {
          edges {
            node {
              title
              link
              creator
              pubDate
            }
          }
        }
      }
    `}
    render={((data) => <section id="articles">
      <Container>
        <Col lg={12} sm={12}>
          <Title title="Latest Articles" />
          <div className="article-wrapper">
            {
              data.allFeedAroundCode.edges.map(({ node: { title, link, pubDate } }, index) => {
                return <div className="article">
                  <div className="date">{formatDate(pubDate)}</div>
                  <a href={link} target="_blank">{title}</a>
                </div>
              })
            }
            <div className="article">
              <a href="https://www.aroundcode.io/" target="_blank">View more</a>
            </div>
          </div>
        </Col>
      </Container >
    </section>
    )}
  />
);

export default LatestArticles;
