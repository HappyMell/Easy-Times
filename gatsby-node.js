/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const HomeTemplate = path.resolve("./src/templates/Home.js")
  const AboutTemplate = path.resolve("./src/templates/About.js")
  const MenuTemplate = path.resolve("./src/templates/Menu.js")
  const GalleryTemplate = path.resolve("./src/templates/Gallery.js")
  const PartyTemplate = path.resolve("./src/templates/Parties.js")
  const EventTemplate = path.resolve("./src/templates/Event.js")
  const BlogsTemplate = path.resolve("./src/templates/Blogs.js")
  const BlogTemplate = path.resolve("./src/templates/Blog.js")
  const ContactTemplate = path.resolve("./src/templates/Contact.js")
  const ReservationTemplate = path.resolve("./src/templates/Reservation.js")
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressWpBlog {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const Page = result.data.allWordpressPage.edges
  const Post = result.data.allWordpressPost.edges
  const Blog = result.data.allWordpressWpBlog.edges

  Page.forEach(page => {
    createPage({
      path: `/home`,
      component: slash(HomeTemplate),
      context: {
        id: page.node.wordpress_id,
      },
    })
  })

  Page.forEach(page => {
    createPage({
      path: `/about-us`,
      component: slash(AboutTemplate),
      context: {
        id: page.node.wordpress_id,
      },
    })
  })

  Page.forEach(page => {
    createPage({
      path: `/contact-us`,
      component: slash(ContactTemplate),
      context: {
        id: page.node.wordpress_id,
      },
    })
  })

  Page.forEach(page => {
    createPage({
      path: `/menu`,
      component: slash(MenuTemplate),
      context: {
        id: page.node.wordpress_id,
      },
    })
  })

  Page.forEach(page => {
    createPage({
      path: `/gallery`,
      component: slash(GalleryTemplate),
      context: {
        id: page.node.wordpress_id,
      },
    })
  })

  Page.forEach(page => {
    createPage({
      path: `/parties-events`,
      component: slash(PartyTemplate),
      context: {
        id: page.node.wordpress_id,
      },
    })
  })

  Post.forEach(post => {
    createPage({
      path: `/events/${post.node.slug}`,
      component: slash(EventTemplate),
      context: {
        id: post.node.wordpress_id,
      },
    })
  })

  Page.forEach(page => {
    createPage({
      path: `/blog`,
      component: slash(BlogsTemplate),
      context: {
        id: page.node.wordpress_id,
      },
    })
  })

  Page.forEach(page => {
    createPage({
      path: `/reservation`,
      component: slash(ReservationTemplate),
      context: {
        id: page.node.wordpress_id,
      },
    })
  })

  Blog.forEach(blog => {
    createPage({
      path: `/blog/${blog.node.slug}`,
      component: slash(BlogTemplate),
      context: {
        id: blog.node.wordpress_id,
      },
    })
  })
}
