import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const Pdf = ({ name, render }) => {
  const data = useStaticQuery(graphql`
    query {
      pdfs: allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  const pdf = data.pdfs.edges.filter(({ filename }) => filename === filename)[0]
  console.log(pdf.node)
  return (
    <>
      { pdf && render(pdf.node) }
    </>
  )
}

Pdf.propTypes = {
  name: PropTypes.string,
  render: PropTypes.elementType
};

export default Pdf;
