import React from "react"
import { graphql } from "gatsby"
import { SRLWrapper } from "simple-react-lightbox"
import SEO from "../components/seo"

import Layout from "../components/layout"

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} />

    <section
      className="gallery-hero"
      style={{
        backgroundImage: `url(${data.wordpressPage.acf.gallery_header.background_image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div className="gallery-hero__overlay">
        <div className="gallery-hero__overlay--container">
          <div className="intro-block">
            <h2 className="title">
              {data.wordpressPage.acf.gallery_header.header}
            </h2>
            <h2 className="sub-title">
              {data.wordpressPage.acf.gallery_header.slogan}
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section className="gallery">
      <div className="container width">
        <div className="left">
          <div className="gallery-row">
            {data.wordpressPage.acf.left_column.four_images.map(item => (
              <div className="col" key={item.image.wordpress_id}>
                <SRLWrapper>
                  <a
                    className="lightbox-one"
                    href={item.image.localFile.childImageSharp.sizes.src}
                  >
                    <img
                      src={item.image.localFile.childImageSharp.sizes.src}
                      alt=""
                    />
                  </a>
                </SRLWrapper>
              </div>
            ))}
          </div>
          <SRLWrapper>
            <a
              className="lightbox-two"
              href={
                data.wordpressPage.acf.left_column.large_image.localFile
                  .childImageSharp.sizes.src
              }
            >
              <img
                src={
                  data.wordpressPage.acf.left_column.large_image.localFile
                    .childImageSharp.sizes.src
                }
                alt=""
              />
            </a>
          </SRLWrapper>
        </div>

        <div className="right">
          <SRLWrapper>
            <a
              className="lightbox-two"
              href={
                data.wordpressPage.acf.right_column.large_image.localFile
                  .childImageSharp.sizes.src
              }
            >
              <img
                src={
                  data.wordpressPage.acf.right_column.large_image.localFile
                    .childImageSharp.sizes.src
                }
                alt=""
              />
            </a>
          </SRLWrapper>
          <div className="row">
            {data.wordpressPage.acf.right_column.four_images.map(item => (
              <div className="col" key={item.image.wordpress_id}>
                <SRLWrapper>
                  <a
                    className="lightbox-one"
                    href={item.image.localFile.childImageSharp.sizes.src}
                  >
                    <img
                      src={item.image.localFile.childImageSharp.sizes.src}
                      alt=""
                    />
                  </a>
                </SRLWrapper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default GalleryPage

export const query = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 13 }) {
      title
      acf {
        gallery_header {
          header
          slogan
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
        left_column {
          four_images {
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
          large_image {
            localFile {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
          }
        }
        right_column {
          four_images {
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
          large_image {
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
