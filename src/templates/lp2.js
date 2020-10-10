import React from 'react'
import { graphql } from 'gatsby'

export default function Lp({ data: { lps }}) {
  return (
  <h1>{lps.parent.name} type2</h1>
  )
}

export const pageQuery = graphql`
  query LpType2($id: String){
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
