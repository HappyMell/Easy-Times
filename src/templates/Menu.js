import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MenuPage = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressPage.title} />
    <section
      className="menu-hero"
      style={{
        backgroundImage: `url(${data.wordpressPage.acf.menu_header.image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div className="menu-hero__overlay">
        <div className="menu-hero-container">
          <div className="menu-hero-container--block">
            <h2 className="title">
              {data.wordpressPage.acf.menu_header.header}
            </h2>
            <h2 className="sub-title">
              {data.wordpressPage.acf.menu_header.sub_title}
            </h2>
          </div>
        </div>
      </div>
    </section>
    <section className="menu-section">
      <div className="container">
        <Tabs className="menu-tabs">
          <TabList className="menu-tabs-menu">
            {data.wordpressPage.acf.menu.tabs.map(tab => (
              <Tab key={tab.tab_name} className="ui-btn-active">
                <button className="tab-button ">
                  <img
                    src={tab.logo.localFile.childImageSharp.sizes.src}
                    alt=""
                  />
                  <div>
                    <p className="title">{tab.tab_name}</p>
                    <p className="details">{tab.slogan}</p>
                  </div>
                </button>
              </Tab>
            ))}
          </TabList>

          <div className="tabs-content">
            <TabPanel className="pane">
              <div className="white-wrapper">
                <div className="collection-list">
                  {data.wordpressPage.acf.menu.coffee_menu.map(item => (
                    <div className="list-item" key={item.name}>
                      <div className="price">{item.price}</div>
                      <div className="item-title">{item.name}</div>
                      <div className="item-sub-title">{item.details}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel className="pane" id="lunch">
              <div className="white-wrapper">
                <div className="collection-list">
                  {data.wordpressPage.acf.menu.lunch_menu.map(item => (
                    <div className="list-item" key={item.name}>
                      <div className="price">{item.price}</div>
                      <div className="item-title">{item.name}</div>
                      <div className="item-sub-title">{item.details}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel className="pane" id="dinner"></TabPanel>
            <TabPanel className="pane" id="drink">
              <div className="white-wrapper">
                <div className="collection-list">
                  {data.wordpressPage.acf.menu.drinks_menu.map(item => (
                    <div className="list-item" key={item.name}>
                      <div className="price">{item.price}</div>
                      <div className="item-title">{item.name}</div>
                      <div className="item-sub-title">{item.details}</div>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </section>

    <section
      className="tried-section"
      style={{
        backgroundImage: `url(${data.wordpressPage.acf.suggestions.background_image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div className="tried-section__overlay">
        <div className="container">
          <h2 className="title">{data.wordpressPage.acf.suggestions.header}</h2>
          <h2 className="sub-title">
            {data.wordpressPage.acf.suggestions.sub_title}
          </h2>
          <div className="divider"></div>

          <div className="white-wrapper">
            <div className="collection-list">
              {data.wordpressPage.acf.suggestions.tried_menu.map(item => (
                <div className="list-item" key={item.name}>
                  <div className="price">{item.price}</div>
                  <div className="item-title">{item.name}</div>
                  <div className="item-sub-title">{item.details}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default MenuPage

export const query = graphql`
  query {
    wordpressPage(wordpress_id: { eq: 11 }) {
      title
      acf {
        suggestions {
          background_image {
            localFile {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
          }
          tried_menu {
            details
            name
            price
          }
          sub_title
          header
        }
        menu {
          background_image {
            localFile {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
          }
          coffee_menu {
            details
            name
            price
          }
          drinks_menu {
            details
            name
            price
          }
          lunch_menu {
            details
            name
            price
          }
          tabs {
            slogan
            tab_name
            logo {
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
        menu_header {
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
`
