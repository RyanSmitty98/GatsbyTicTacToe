import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const PureHeader = ({ data }) => (
  <header>
    <h1>{data.site.siteMetadata.title}</h1>
  </header>
)

export const Header = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <PureHeader {...props} data={data}></PureHeader>
}

export default Header