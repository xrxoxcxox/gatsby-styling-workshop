import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { css } from "@emotion/core"

const header = css`
  align-items: center;
  display: flex;
  font-size: 20px;
  padding: 8px;
`

const aboveTheFold = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 16px;
`

const h1 = css`
  color: #fff;
  font-size: 40px;
  font-weight: 600;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
`

const h2 = css`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
`

const button = css`
  background-color: #ffc758;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 16px;
  padding: 8px 16px;
`

const section = css`
  margin-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
`

const h3 = css`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`

const lead = css`
  margin-top: 8px;
  text-align: center;
`

const item = css`
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.14);
  padding: 16px;
  & + & {
    margin-top: 16px;
  }
`

const itemName = css`
  font-size: 18px;
  font-weight: 600;
  margin-top: 8px;
`

const itemText = css`
  font-size: 14px;
  margin-top: 4px;
`

const footer = css`
  background-color: #212121;
  color: #fff;
  font-size: 12px;
  margin-top: 24px;
  padding: 16px;
  text-align: center;
`

export default function Page1({ data }) {
  return (
    <>
      <header css={header}>Smartphone Only</header>
      <BackgroundImage
        fluid={data.keyVisual.childImageSharp.fluid}
        css={aboveTheFold}
      >
        <h1 css={h1}>This is page1</h1>
        <h2 css={h2}>Some heading text</h2>
        <button css={button}>Call to Action</button>
      </BackgroundImage>
      <section css={section}>
        <h3 css={h3}>Subheading sentence.</h3>
        <p css={lead}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <section css={section}>
        <div css={item}>
          <Img fluid={data.item1.childImageSharp.fluid} />
          <h3 css={itemName}>item name1</h3>
          <p css={itemText}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <button css={button}>Call to Action</button>
        </div>
        <div css={item}>
          <Img fluid={data.item2.childImageSharp.fluid} />
          <h3 css={itemName}>item name2</h3>
          <p css={itemText}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <button css={button}>Call to Action</button>
        </div>
        <div css={item}>
          <Img fluid={data.item3.childImageSharp.fluid} />
          <h3 css={itemName}>item name3</h3>
          <p css={itemText}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <button css={button}>Call to Action</button>
        </div>
      </section>
      <footer css={footer}>©︎ 2020 FooBar</footer>
    </>
  )
}

export const query = graphql`
  query {
    keyVisual: file(relativePath: { eq: "keyVisual.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item1: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item2: file(relativePath: { eq: "image2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    item3: file(relativePath: { eq: "image3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
