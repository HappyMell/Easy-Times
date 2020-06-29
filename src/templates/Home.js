import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Flickity from "react-flickity-component"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { SRLWrapper } from "simple-react-lightbox"
import "react-tabs/style/react-tabs.scss"

let flickityOptions = {
  cellAlign: "left",
  contain: true,
  fade: true,
  freeScroll: true,
  wrapAround: true,
  autoPlay: true,
}

const HomeTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} />
    <section className="hero-slider">
      <Flickity
        className={"carousel mask"}
        elementType={"div"}
        options={flickityOptions}
      >
        {data.wordpressPage.acf.home_header.carousel.map(item => (
          <div
            className="hero-slide"
            style={{
              backgroundImage: `url(${item.image.localFile.childImageSharp.sizes.src})`,
            }}
            key={item.big_header}
          >
            <div className="hero-slider__overlay">
              <div className="hero-slider-container">
                <p className="intro-title">{item.top_header}</p>
                <p className="slide-title">{item.big_header}</p>
                <p className="bottom-title">{item.big_header}</p>
                <div>
                  <button className="top-button">
                    <Link to={`/about-us`}>More About Us </Link>
                  </button>
                  <br />
                  <button className="bottom-button">
                    <Link to={`/reservation`}>Reserve a Table!</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Flickity>
    </section>

    <section className="about">
      <div className="container">
        <div className="intro-block">
          <p className="intro-title">
            {data.wordpressPage.acf.about.top_header}
          </p>
          <h2 className="title">{data.wordpressPage.acf.about.big_header}</h2>
          <h2 className="sub-title">
            {data.wordpressPage.acf.about.bottom_header}
          </h2>
          <div className="divider"></div>
          <p className="paragraph">{data.wordpressPage.acf.about.details}</p>
        </div>
      </div>
    </section>

    <section
      className="background-image-section"
      style={{
        backgroundImage: `url(${data.wordpressPage.acf.parallax.background_image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div className="background-image-section__overlay">
        <div className="container">
          <div className="intro-block">
            <h2 className="intro-title">
              {data.wordpressPage.acf.parallax.intro_title}
            </h2>
            <h2 className="sub-title">
              {data.wordpressPage.acf.parallax.sub_title}
            </h2>
          </div>
          <div className="section-row">
            {data.wordpressPage.acf.parallax.rows.map(row => (
              <div className="facts" key={row.detail}>
                <img
                  src={row.image.localFile.childImageSharp.sizes.src}
                  alt=""
                />
                <p dangerouslySetInnerHTML={{ __html: row.detail }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section
      className="menu"
      style={{
        backgroundImage: `url(${data.wordpressPage.acf.menu.background_image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div className="menu__overlay">
        <div className="container">
          <h2 className="title">{data.wordpressPage.acf.menu.intro_title}</h2>
          <h2 className="sub-title">{data.wordpressPage.acf.menu.sub_title}</h2>

          <Tabs className="menu-tabs">
            <TabList className="menu-tabs-menu">
              {data.wordpressPage.acf.menu.tab_buttons.map(button => (
                <Tab className="ui-btn" key={button.name}>
                  <button href="#" className="tab-button">
                    {button.name}
                  </button>
                </Tab>
              ))}
            </TabList>

            <div className="tabs-content">
              <TabPanel className="pane">
                <div className="white-wrapper">
                  <div className="collection-list">
                    {data.wordpressPage.acf.menu.coffee_item.map(item => (
                      <div className="list-item" key={item.name}>
                        <div className="price">{item.price}</div>
                        <div className="item-title">{item.name}</div>
                        <div className="item-sub-title">{item.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="pane">
                <div className="white-wrapper">
                  <div className="collection-list">
                    {data.wordpressPage.acf.menu.lunch_item.map(item => (
                      <div className="list-item" key={item.name}>
                        <div className="price">{item.price}</div>
                        <div className="item-title">{item.name}</div>
                        <div className="item-sub-title">{item.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="pane">
                <div className="white-wrapper">
                  <div className="collection-list">
                    {data.wordpressPage.acf.menu.everyday_specials_item.map(
                      item => (
                        <div className="list-item" key={item.name}>
                          <div className="price">{item.price}</div>
                          <div className="item-title">{item.name}</div>
                          <div className="item-sub-title">{item.detail}</div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
          <button className="menu-button">
            <Link to={data.wordpressPage.acf.menu.complete_menu}>
              View our complete menu
            </Link>
          </button>
        </div>
      </div>
    </section>

    <section className="bottom">
      <div className="container">
        <div className="bottom-columns">
          <div className="text-column-left">
            <p className="intro-title">
              {data.wordpressPage.acf.bottom.intro_title}
            </p>
            <h2 className="title">{data.wordpressPage.acf.bottom.title}</h2>
            <h2 className="sub-title">
              {data.wordpressPage.acf.bottom.sub_title}
            </h2>
            <div className="divider"></div>
            <p className="info">{data.wordpressPage.acf.bottom.details}</p>
          </div>
          <div className="text-column-right">
            <div className="small-gallery-row">
              {data.wordpressPage.acf.bottom.images.map(imager => (
                <div
                  className="small-gallery-row--left"
                  key={imager.image.localFile.childImageSharp.sizes.src}
                >
                  <SRLWrapper>
                    <a href={imager.image.localFile.childImageSharp.sizes.src}>
                      <img
                        src={imager.image.localFile.childImageSharp.sizes.src}
                        alt=""
                      />
                    </a>
                  </SRLWrapper>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default HomeTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      acf {
        home_header {
          carousel {
            big_header
            bottom_header
            button_left
            button_right
            top_header
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
        about {
          big_header
          bottom_header
          details
          top_header
        }

        parallax {
          intro_title
          sub_title
          background_image {
            localFile {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
          }
          rows {
            detail
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
        menu {
          complete_menu
          intro_title
          sub_title
          tab_buttons {
            name
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
          coffee_item {
            detail
            name
            price
          }
          everyday_specials_item {
            detail
            name
            price
          }
          lunch_item {
            detail
            name
            price
          }
        }

        bottom {
          details
          intro_title
          sub_title
          title
          images {
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
