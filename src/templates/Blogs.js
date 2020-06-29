import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} />

    <section
      class="about-hero"
      style={{
        backgroundImage: `url(${data.wordpressPage.acf.blog.header.image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div class="about-hero__overlay">
        <div class="about-container">
          <div class="section-block">
            <h2 class="hero-title">
              {data.wordpressPage.acf.blog.header.header}
            </h2>
            <h2 class="hero-subtitle">
              {data.wordpressPage.acf.blog.header.sub_title}
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section class="blog">
      <div class="container">
        <div class="list-wrapper">
          <div class="list-item">
            {data.allWordpressWpBlog.edges.map(post => (
              <div class="post-item">
                <div class="row">
                  <div class="col-left">
                    <div
                      class="image"
                      style={{
                        backgroundImage: `url(${post.node.featured_media.localFile.childImageSharp.sizes.src})`,
                      }}
                    >
                      <Link to={post.node.path} class="image-link"></Link>
                    </div>
                  </div>
                  <div class="col-right">
                    <h2 class="title">{post.node.date}</h2>
                    <Link class="link-title" to={post.node.slug}>
                      {post.node.title}
                    </Link>
                    <div class="divider"></div>
                    <p
                      class="info"
                      dangerouslySetInnerHTML={{ __html: post.node.content }}
                    ></p>
                    <Link to={post.node.path} class="dark-button">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query {
    allWordpressWpBlog {
      edges {
        node {
          title
          path
          content
          date(formatString: "MMMM D, YYYY")
          featured_media {
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
    wordpressPage(wordpress_id: { eq: 17 }) {
      title
      acf {
        blog {
          header {
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
