import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} />
    <section
      className="about-hero"
      style={{
        backgroundImage: `url(${data.wordpressPage.acf.about_header.background_image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div className="about-hero__overlay">
        <div className="about-container">
          <div className="section-block">
            <h2 className="hero-title">
              {data.wordpressPage.acf.about_header.title}
            </h2>
            <h2 className="hero-subtitle">
              {data.wordpressPage.acf.about_header.sub_title}
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section className="about-section">
      <div className="container">
        <div className="about-section__row">
          <div className="image-column">
            <div
              className="image"
              style={{
                backgroundImage: `url(${data.wordpressPage.acf.review.image.localFile.childImageSharp.sizes.src})`,
              }}
            ></div>
          </div>
          <div className="text-column">
            <p className="text-column__title">
              {data.wordpressPage.acf.review.small_title}
            </p>
            <h2>{data.wordpressPage.acf.review.large_title}</h2>
            <div className="divider"></div>
            <p className="info">{data.wordpressPage.acf.review.details}</p>

            <div className="rating">
              <div className="stars-wrapper">
                {data.wordpressPage.acf.review.stars.map(star => (
                  <img
                    src={star.star.localFile.childImageSharp.sizes.src}
                    alt=""
                  />
                ))}
              </div>
              <p className="rating-title">
                {data.wordpressPage.acf.review.review_title}
              </p>
              <p className="info">
                {data.wordpressPage.acf.review.review_detail}
              </p>
              <p className="name">
                {data.wordpressPage.acf.review.review_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="image-section"
      style={{
        backgroundImage: `url(${data.wordpressPage.acf.parallax.background_image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div className="image-section__overlay">
        <div className="container">
          <div className="image-section-column">
            <div className="image-column">
              <img
                src={
                  data.wordpressPage.acf.parallax.image.localFile
                    .childImageSharp.sizes.src
                }
                alt=""
              />
              <p className="image-column__title">
                {data.wordpressPage.acf.parallax.name}
              </p>
              <p className="image-column__owner">
                {data.wordpressPage.acf.parallax.title}
              </p>
              <p className="image-column__info">
                {data.wordpressPage.acf.parallax.details}
              </p>
              <p className="image-column__signature">
                {data.wordpressPage.acf.parallax.signature}
              </p>
            </div>
            <div className="text-col-right"></div>
          </div>
        </div>
      </div>
    </section>

    <section className="location-section">
      <div className="container">
        <div className="location-section__row">
          <div className="contact-col">
            <p className="contact-col__title">
              {data.wordpressPage.acf.location.title}
            </p>
            <h2 className="contact-col__intro">
              {data.wordpressPage.acf.location.header}
            </h2>
            <div className="divider"></div>
            <p
              className="contact-col__info"
              dangerouslySetInnerHTML={{
                __html: data.wordpressPage.acf.location.address,
              }}
            ></p>
          </div>
          <div className="contact-col-right">
            <div
              className="contact-col-right__image"
              style={{
                backgroundImage: `url(${data.wordpressPage.acf.location.image.localFile.childImageSharp.sizes.src})`,
              }}
            ></div>
          </div>
        </div>
        <div className="location-section__row">
          <div className="contct-col">
            <div className="contact-col__img">
              <img
                src={
                  data.wordpressPage.acf.contact.image.localFile.childImageSharp
                    .sizes.src
                }
                alt=""
              />
            </div>
          </div>
          <div className="contact-col-left">
            <p className="contact-col-left__title">
              {data.wordpressPage.acf.contact.title}
            </p>
            <h2 className="contact-col-left__intro">
              {data.wordpressPage.acf.contact.header}
            </h2>
            <div className="divider"></div>
            <p className="contact-col-left__info">
              <strong>
                Call us:{" "}
                <Link to={data.wordpressPage.acf.contact.number}>
                  {" "}
                  +32 200 3023 11
                </Link>
              </strong>
              <br />
              <strong>
                Mail us:{" "}
                <Link to={data.wordpressPage.acf.contact.email}>
                  {" "}
                  hello@easytimes.co.uk
                </Link>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 9 }) {
      title
      excerpt
      content
      acf {
        about_header {
          title
          sub_title
          background_image {
            localFile {
              childImageSharp {
                sizes {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }

        review {
          large_title
          review_detail
          review_name
          review_title
          small_title
          details
          image {
            localFile {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
          }
          stars {
            star {
              wordpress_id
              localFile {
                childImageSharp {
                  sizes {
                    src
                  }
                }
              }
            }
          }
        }

        contact {
          email
          header
          number
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

        location {
          address
          header
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

        parallax {
          intro_title
          name
          signature
          image {
            localFile {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
          }
          details
          background_image {
            localFile {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
