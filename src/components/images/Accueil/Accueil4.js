import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Accueil4 = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Accueil/accueil4.jpg" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth:700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Une statue de lion couché, située juste devant la porte d'entrée du château."/>
}

export default Accueil4
