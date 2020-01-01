import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

 const getSiteData = graphql`
   query FirstQuery {
        site{
            siteMetadata{
                title
                decription
                author
                data{
                age
                }
            }
        }
    }
 `
const Header = () => {
    const {
        site: { siteMetadata },
    } = useStaticQuery(getSiteData)
    console.log(siteMetadata)

    return (
        <div>
            <h1>title:{siteMetadata.title}</h1>
            <h1>author:{siteMetadata.author}</h1>
        </div>
    )
}

export default Header
