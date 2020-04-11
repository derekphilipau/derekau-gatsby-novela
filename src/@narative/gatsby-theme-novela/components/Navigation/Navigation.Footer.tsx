import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";

import Section from "@components/Section";
import SocialLinks from "@components/SocialLinks";

import Headings from "@components/Headings";

import mediaqueries from "@styles/media";

import InstagramPosts from "@components/Instagram/InstagramPosts";

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            social {
              url
              name
            }
          }
        }
      }
    }
    allMdx(
      sort: { fields: frontmatter___date, order: ASC }
      filter: { frontmatter: { date: { ne: null } } }
    ) {
      edges {
        node {
          frontmatter {
            date
          }
        }
      }
    }
  }
`;

const Footer: React.FC<{}> = () => {
  const results = useStaticQuery(siteQuery);
  const { name, social } = results.allSite.edges[0].node.siteMetadata;

  const copyrightDate = (() => {
    const { edges } = results.allMdx;
    const years = [0, edges.length - 1].map((edge) =>
      new Date(edges[edge].node.frontmatter.date).getFullYear()
    );
    return years[0] === years[1] ? `${years[0]}` : `${years[0]}–${years[1]}`;
  })();

  return (
    <>
      <FooterGradient />
      <Section narrow>
        
        <HoritzontalRule />

        <InstagramHeading>Follow me on Instagram</InstagramHeading>

        <InstagramPosts />

        <HoritzontalRule />

        <FooterContainer>

          <FooterText>
            © {copyrightDate} {name}
          </FooterText>
          <div>
            <SocialLinks links={social} />
          </div>
        </FooterContainer>
      </Section>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 80px;
  color: ${p => p.theme.colors.grey};

  ${mediaqueries.tablet`
    flex-direction: column;
    padding-bottom: 100px;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 50px;
  `}
`;

const HoritzontalRule = styled.div`
  position: relative;
  margin: 140px auto 50px;
  border-bottom: 1px solid ${p => p.theme.colors.horizontalRule};

  ${mediaqueries.tablet`
    margin: 60px auto;
  `}

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const FooterText = styled.div`
  ${mediaqueries.tablet`
    margin-bottom: 80px;
  `}

  ${mediaqueries.phablet`
    margin: 120px auto 100px;
  `}
`;

const FooterGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${p => p.theme.colors.gradient};
  transition: ${p => p.theme.colorModeTransition};
`;

const InstagramHeading = styled(Headings.h2)`
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: 25px;
  font-weight: bold;
  line-height: 1.32;

  ${mediaqueries.tablet`
    margin-bottom: 20px;
    font-size: 36px;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
  `}
`;