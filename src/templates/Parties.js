import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PartyPage = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} />
    <section
      className="gallery-hero"
      style={{
        backgroundImage: `url(${data.wordpressPage.acf.parties.header.image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div className="gallery-hero__overlay">
        <div className="gallery-hero__overlay--container">
          <div className="intro-block">
            <h2 className="title">
              {data.wordpressPage.acf.parties.header.header}
            </h2>
            <h2 className="sub-title">
              {data.wordpressPage.acf.parties.header.slogan}
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section className="party">
      <div className="container">
        <div className="intro-blocks">
          <p className="intro-title">
            {data.wordpressPage.acf.parties.party_box.small_header}
          </p>
          <h2 className="intro-blocks__title">
            {data.wordpressPage.acf.parties.party_box.header}
          </h2>
          <div className="intro-blocks__divider"></div>
          <p className="intro-blocks__info">
            {data.wordpressPage.acf.parties.party_box.details}
          </p>
        </div>
      </div>
    </section>

    <section className="events">
      <div className="container">
        <div className="list-wrapper">
          <div className="list">
            <div className="item">
              {data.allWordpressPost.edges.map(post => (
                <div className="events-item" key={post.node.wordpress_id}>
                  <div className="contact-col">
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url(${post.node.featured_media.localFile.childImageSharp.sizes.src})`,
                      }}
                    >
                      <a
                        className="image-link"
                        href={`/events/${post.node.slug}`}
                      ></a>
                    </div>
                  </div>
                  <div className="col-right">
                    <p className="intro-title">Events</p>
                    <Link
                      className="col-right__link"
                      to={`/events/${post.node.slug}`}
                    >
                      {post.node.title}
                    </Link>
                    <div className="col-right__divider"></div>
                    <Link
                      className="dark-button"
                      to={`/events/${post.node.slug}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default PartyPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          wordpress_id
          categories {
            name
          }
          title
          slug
          featured_media {
            localFile {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
            wordpress_id
          }
        }
      }
    }
    wordpressPage(wordpress_id: { eq: 15 }) {
      title
      acf {
        parties {
          party_box {
            details
            header
            small_header
          }
          header {
            image {
              localFile {
                childImageSharp {
                  sizes {
                    src
                  }
                }
              }
            }
            header
            slogan
          }
        }
      }
    }
  }
`
