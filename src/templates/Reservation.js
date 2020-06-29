import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"

const ReservationPage = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} />
    <section
      className="about-hero"
      style={{
        backgroundImage: `url(${data.wordpressPage.acf.reservation.header.image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div className="about-hero__overlay">
        <div className="about-container">
          <div className="section-block">
            <h2 className="hero-title">
              {data.wordpressPage.acf.reservation.header.title}
            </h2>
            <h2 className="hero-subtitle">
              {data.wordpressPage.acf.reservation.header.sub_title}
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section className="reservation">
      <div className="reservation__container">
        <div className="row">
          <div className="contact-col">
            <div className="form-block">
              <div className="form">
                <p className="title">
                  {data.wordpressPage.acf.reservation.reservation_table.title}
                </p>
                <h2 className="intro-title">
                  {
                    data.wordpressPage.acf.reservation.reservation_table
                      .sub_title
                  }
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
          <div className="div">
            <div className="image-col">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${data.wordpressPage.acf.reservation.reservation_table.image_one.localFile.childImageSharp.sizes.src})`,
                }}
              ></div>
            </div>

            <div className="image-col">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${data.wordpressPage.acf.reservation.reservation_table.image_two.localFile.childImageSharp.sizes.src})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ReservationPage

export const query = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 21 }) {
      title
      acf {
        reservation {
          header {
            sub_title
            title
            image {
              localFile {
                childImageSharp {
                  sizes {
                    src
                  }
                }
              }
            }
          }
          reservation_table {
            image_one {
              localFile {
                childImageSharp {
                  sizes {
                    src
                  }
                }
              }
            }
            image_two {
              localFile {
                childImageSharp {
                  sizes {
                    src
                  }
                }
              }
            }
            sub_title
            title
          }
        }
      }
      content
    }
  }
`
