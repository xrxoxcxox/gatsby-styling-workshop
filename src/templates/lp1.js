import React from 'react'
import { graphql } from 'gatsby'
import { css } from "@emotion/core"

export default function Lp1({ data: { lps }}) {
  const cemeteries = lps.properties.map(property => {
    return(
      <div key={property.name} css={card}>
        <img alt='' src={property.image} css={image} />
        <p css={name}>{property.name}</p>
        <p>{property.type}</p>
        <p>{property.address}</p>
      </div>
    )
  })
  return (
  <>
    <h1 css={title}>安さならダントツ</h1>
    <div css={contents}>
      {cemeteries}
    </div>
  </>
  )
}

const title = css`
  font-size: 32px;
  text-align: center;
`

const contents = css`
  padding: 24px 16px;
`

const card = css`
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.14);
  padding: 16px;
  & + & {
    margin-top: 16px;
  }
`

const image = css`
  width: 100%;
`

const name = css`
  font-size: 20px;
  font-weight: 600;
`

export const pageQuery = graphql`
  query LpType1($id: String){
    lps(id: { eq: $id }) {
      properties {
        address
        image
        name
        type
      }
      parent {
        ... on File {
          id
          name
        }
      }
    }
  }
`
