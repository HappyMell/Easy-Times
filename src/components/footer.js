import { StaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import "../../scss/style.scss"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressAcfOptions {
          options {
            logos {
              link
              image {
                localFile {
                  childImageSharp {
                    sizes {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
              }
            }
            arrow {
              localFile {
                childImageSharp {
                  sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <footer className="page-footer">
        <a className="page-footer__top" href="#top">
          <Img
            sizes={
              data.wordpressAcfOptions.options.arrow.localFile.childImageSharp
                .sizes
            }
            alt=""
          />
        </a>
        <div className="page-footer__container">
          <div className="row">
            <div className="left"></div>
            <div className="right">
              {data.wordpressAcfOptions.options.logos.map(logo => (
                <a href={logo.link} key={logo.link}>
                  <img
                    src={logo.image.localFile.childImageSharp.sizes.src}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    )}
  />
)

export default Footer
