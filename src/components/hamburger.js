import React, { Component } from "react"
import { HamburgerCollapseReverse } from "react-animated-burgers"

class Hamburger extends Component {
  state = {
    isActive: false,
    menuOpen: false,
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  render() {
    return (
      <div>
        <HamburgerCollapseReverse
          className="hamburger"
          isActive={this.state.isActive}
          toggleButton={this.toggleButton}
          buttonColor="white"
          barColor="black"
          buttonWidth={30}
        />
      </div>
    )
  }
}

export default Hamburger
