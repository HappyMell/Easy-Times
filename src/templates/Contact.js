import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"

const ContactPage = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} />
    <section
      className="about-hero"
      style={{
        backgroundImage: `url(${data.wordpressPage.acf.contact_page.header.image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div className="about-hero__overlay">
        <div className="about-container">
          <div className="section-block">
            <h2 className="hero-title">
              {data.wordpressPage.acf.contact_page.header.heading}
            </h2>
            <h2 className="hero-subtitle">
              {data.wordpressPage.acf.contact_page.header.slogan}
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section className="contact">
      <div className="container">
        <div className="contact-us-row">
          <div className="col">
            <div className="form-block">
              <div className="form">
                <p className="intro-title">
                  {data.wordpressPage.acf.contact_page.contact.header}
                </p>
                <h2 className="title">
                  {data.wordpressPage.acf.contact_page.contact.sub_header}
                </h2>
                <div className="divider"></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.wordpressPage.content,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-two">
            <div
              className="reservation-link"
              style={{
                backgroundImage: `url(${data.wordpressPage.acf.contact_page.reservation.image.localFile.childImageSharp.sizes.src})`,
              }}
            >
              <div className="reservation-link__overlay">
                <div className="overlay-title">
                  {data.wordpressPage.acf.contact_page.reservation.header}
                </div>
                <div className="overlay-subtitle">
                  {data.wordpressPage.acf.contact_page.reservation.sub_header}
                </div>
                <Link
                  to={data.wordpressPage.acf.contact_page.reservation.link}
                  className="bottom-button"
                >
                  Reserve now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="visit">
      <div className="container col">
        <div className="row">
          <div className="col-one">
            <p className="intro-title">
              {data.wordpressPage.acf.contact_page.visit.header}
            </p>
            <h2 className="title">
              {data.wordpressPage.acf.contact_page.visit.sub_header}
            </h2>
            <div className="divider"></div>
            <p
              className="paragraph"
              dangerouslySetInnerHTML={{
                __html: data.wordpressPage.acf.contact_page.visit.details,
              }}
            ></p>
          </div>
          <div className="col-two">
            <div className="map">
              <div id="map">
                <Img fixed={data.staticMap.childFile.childImageSharp.fixed} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-three">
            <div
              className="image"
              style={{
                backgroundImage: `url(${data.wordpressPage.acf.contact_page.visit.contact_background_image.localFile.childImageSharp.sizes.src})`,
              }}
            ></div>
          </div>

          <div className="col-four">
            <p className="intro-title">
              {data.wordpressPage.acf.contact_page.visit.contact_header}
            </p>
            <h2 className="title">
              {data.wordpressPage.acf.contact_page.visit.contact_sub_header}
            </h2>
            <div className="divider"></div>
            <div className="links">
              <p>
                Call us:{" "}
                <a
                  href={`tel:${data.wordpressPage.acf.contact_page.visit.call_us}`}
                >
                  {data.wordpressPage.acf.contact_page.visit.call_us}
                </a>
              </p>
              <p>
                Mail us:
                <a
                  href={`mailto:${data.wordpressPage.acf.contact_page.visit.mail_us}`}
                >
                  {data.wordpressPage.acf.contact_page.visit.mail_us}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage

export const query = graphql`
  query {
    staticMap {
      childFile {
        childImageSharp {
          fixed(width: 400, height: 330) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    wordpressPage(wordpress_id: { eq: 19 }) {
      title
      content
      acf {
        contact_page {
          contact {
            header
            sub_header
          }
          header {
            heading
            image {
              localFile {
                childImageSharp {
                  sizes {
                    src
                  }
                }
              }
            }
            slogan
          }
          reservation {
            header
            image {
              localFile {
                childImageSharp {
                  sizes {
                    src
                  }
                }
              }
            }
            link
            sub_header
          }
          visit {
            call_us
            contact_background_image {
              localFile {
                childImageSharp {
                  sizes {
                    src
                  }
                }
              }
            }
            contact_header
            contact_sub_header
            details
            header
            mail_us
            sub_header
          }
        }
      }
    }
  }
`
