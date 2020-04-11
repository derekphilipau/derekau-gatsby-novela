import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled";
// import Img from "gatsby-image"
import Image, { ImagePlaceholder } from '@components/Image';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  opacity: 0;
  transition: all 0.3s ease 0s;
`
const Content = styled.div`
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`

const Info = styled.div`
  opacity: 0;
  transition: all 0.4s ease 0s;
`

const Wrapper = styled.a`
  position: relative;
  overflow: hidden;
  > div img {
    transition: all 0.3s ease 0s !important;
  }
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
    ${Info} {
      opacity: 1;
    }
  }
`

const Node = ({ node }) => (
  <Wrapper plain href={`https://www.instagram.com/p/${node.id}/`}>
    <Image src={node.localFile.childImageSharp.fluid} /> : <ImagePlaceholder />
    <Content justify="center">
      <Info gap="medium" alignSelf="center" direction="row">
        <div color="white">{node.likes}</div>
        <div color="white">{node.comments}</div>
      </Info>
    </Content>
  </Wrapper>
)


const Grid = styled.div`
  height: 590px;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;



const InstagramPosts = ({ nodes }) => {
  return (
    <Grid>
      {nodes.edges.map(instagram => (
        <Node key={instagram.node.id} node={instagram.node} />
      ))}
    </Grid>
  )
}

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
    render={data => <InstagramPosts nodes={data.allInstaNode} />}
  />

)
