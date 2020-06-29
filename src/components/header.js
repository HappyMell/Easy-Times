import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import Hamburger from "./hamburger"
import styled from "styled-components"
import "../../scss/style.scss"

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  margin: 10px 10px 0;

  @media (max-width: 769px) {
    display: flex;
  }
`

const Navbox = styled.div`
    position: absolute;
    top: 70px;
    left: 0px;
    width: 100%;
    // height: 243px;
    background: #262321;
    z-index: 5;

    @media (min-width: 769px) {
        display: none;
      }

    ul {
      margin: 0;
      text-align: center;
      list-style: none;     

      li {
        padding: 15px 20px;
        font-weight: 500;
        width: 100%;
        transition-duration: 0.4s;
        cursor: pointer;

        a {
          display: block;

          color: #fff;
          font-size: 13px;
          line-height: 5px;
          text-transform: uppercase;

          &:hover {
            color: #fff;
          }
        }

        &:hover {         
          color: #fff;
        }
      }     
    }
    transition: all 0.3s ease-in;
    left: ${props => (props.open ? "100%" : "0")};
  }
`

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      wordpressAcfOptions {
        options {
          header
          subtitle

          logos {
            link
            image {
              source_url
            }
          }

          background_image {
            localFile {
              childImageSharp {
                sizes(maxWidth: 1200) {
                  src
                }
              }
            }
          }

          coffee {
            localFile {
              childImageSharp {
                sizes {
                  src
                }
              }
            }
          }

          logos {
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
      wordpressWpApiMenusMenusItems(name: { eq: "Main Menu" }) {
        items {
          title
          object_slug
        }
      }

      wordpressSiteMetadata {
        url
      }
    }
  `)
  return (
    <header
      className="page-header"
      style={{
        backgroundImage: `url(${data.wordpressAcfOptions.options.background_image.localFile.childImageSharp.sizes.src})`,
      }}
    >
      <div className="page-header__overlay">
        <div className="page-header__overlay--container">
          <Link className="logo-container" to={`/`}>
            <img
              src={
                data.wordpressAcfOptions.options.coffee.localFile
                  .childImageSharp.sizes.src
              }
              alt=""
            />
            <div>
              <h1 className="logo-text">
                {data.wordpressAcfOptions.options.header}
              </h1>
              <h2 className="logo-text-subtitle">
                {data.wordpressAcfOptions.options.subtitle}
              </h2>
            </div>
          </Link>
          <Toggle
            navbarOpen={navbarOpen}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <Hamburger open /> : <Hamburger />}
          </Toggle>
          {navbarOpen ? (
            <Navbox className="page-header__nav">
              <ul>
                {data.wordpressWpApiMenusMenusItems.items.map(item => (
                  <li key={item.object_slug}>
                    <Link to={`/${item.object_slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </Navbox>
          ) : (
            <Navbox className="page-header__nav" open>
              <ul>
                {data.wordpressWpApiMenusMenusItems.items.map(item => (
                  <li key={item.object_slug}>
                    <Link to={`/${item.object_slug}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </Navbox>
          )}
        </div>
        <div className="divider"></div>
        <nav className="page-header-large">
          <ul>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug}>
                <Link to={`/${item.object_slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="divider"></div>
        <div className="contact">
          {data.wordpressAcfOptions.options.logos.map(logo => (
            <a href={logo.link} key={logo.link}>
              <img
                src={logo.image.localFile.childImageSharp.sizes.src}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
