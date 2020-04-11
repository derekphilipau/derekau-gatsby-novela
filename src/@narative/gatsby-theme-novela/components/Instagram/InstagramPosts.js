import React from "react"
import { StaticQuery, graphql } from "gatsby"
import InstagramList from './Instagram.List';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode(filter: { username: { eq: "glazyorg" } }) {
          edges {
            node {
              id
              username
              likes
              caption
              comments
              localFile {
                childImageSharp {
                  fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <InstagramList nodes={data.allInstaNode.edges} />}
  />

)
