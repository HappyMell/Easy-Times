import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"

const EventPage = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPost.title} />
    <main className="workshop">
      <section
        className="workshop-hero"
        style={{
          backgroundImage: `url(${data.wordpressPost.acf.events.header.image.localFile.childImageSharp.sizes.src})`,
        }}
      >
        <div className="workshop-hero__overlay">
          <div className="workshop-hero__overlay--container">
            <div className="header-block">
              <h2 className="title">
                {data.wordpressPost.acf.events.header.header}
              </h2>
              <h2 className="sub-title">
                {data.wordpressPost.acf.events.header.sub_title}
              </h2>
              <p className="info">
                {data.wordpressPost.acf.events.header.details}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="tried-section"
        style={{
          backgroundImage: `url(${data.wordpressPost.acf.events.workshop.background_image.localFile.childImageSharp.sizes.src})`,
        }}
      >
        <div className="tried-section__overlay">
          <div className="tried-section__overlay--container">
            <h2 className="title">
              {data.wordpressPost.acf.events.workshop.header}
            </h2>
            <h2 className="sub-title">
              {data.wordpressPost.acf.events.workshop.info}
            </h2>

            <div className="white-wrapper">
              <div className="collection-list">
                {data.wordpressPost.acf.events.workshop.event.map(item => (
                  <div className="list-item" key={item.name}>
                    <div className="price">{item.price}</div>
                    <div className="item-title">{item.name}</div>
                    <div className="item-sub-title">{item.details}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="menu-bottom">
              <Link
                to={data.wordpressPost.acf.events.workshop.contact.url}
                className="dark-button"
              >
                {data.wordpressPost.acf.events.workshop.contact.title}
              </Link>
              <p className="more-info">
                Or do you need{" "}
                <Link to={data.wordpressPost.acf.events.workshop.more.url}>
                  {data.wordpressPost.acf.events.workshop.more.title}
                </Link>
                ?
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
)

export default EventPage

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      acf {
        events {
          workshop {
            header
            info
            more {
              target
              title
              url
            }
            contact {
              target
              title
              url
            }
            background_image {
              localFile {
                childImageSharp {
                  sizes {
                    src
                  }
                }
              }
            }
            event {
              details
              name
              price
            }
          }
          header {
            details
            header
            sub_title
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
        }
      }
    }
  }
`
