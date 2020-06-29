import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressWpBlog.title} />
    <section
      class="blog-entry-hero"
      style={{
        backgroundImage: `url(${data.wordpressWpBlog.acf.blogs.header_image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div class="blog-entry-hero__overlay">
        <div class="blog-entry-hero__overlay--container">
          <div class="intro-blocks">
            <h4 class="date">{data.wordpressWpBlog.date}</h4>
            <h2 class="title">{data.wordpressWpBlog.title}</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="blog-entry">
      <div class="container">
        <div class="blog-post-block">
          <div class="author-block">
            <div class="author-block__wrapper">
              <img
                src={
                  data.wordpressWpBlog.acf.blogs.owner_image.localFile
                    .childImageSharp.sizes.src
                }
              />
              <div class="box">
                <div class="title">Written By:</div>
                <div class="name">Jonathon Blair</div>
              </div>
            </div>
            <Link to={`/blog`} class="button">
              Back to archive
            </Link>
          </div>
          <div
            class="post-block"
            dangerouslySetInnerHTML={{
              __html: data.wordpressWpBlog.acf.blogs.content,
            }}
          ></div>
        </div>
      </div>
    </section>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query($id: Int!) {
    wordpressWpBlog(wordpress_id: { eq: $id }) {
      title
      date(formatString: "MMMM D, YYYY")
      wordpress_id
      acf {
        blogs {
          content
          header_image {
            localFile {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
          }
          owner_image {
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
