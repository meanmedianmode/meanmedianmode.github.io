import React from 'react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  background-position: top 0% center;
  height: 60vh;
`;

const Hero = () => {
  const { image } =  useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "blog-header.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1174, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
   <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft"/>
  )
}

export default Hero;
