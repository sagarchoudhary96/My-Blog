import React, { Component } from 'react'

class NavBar extends Component {
  render () {
    return (
      <nav className="nav-extended">
        <div className="nav-wrapper red">
          <a href="#!" className="brand-logo">Logo</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent red hide-on-large-only">
            <li className="tab"><a href="sass.html">Sass</a></li>
            <li className="tab"><a href="sass.html">Components</a></li>
            <li className="tab"><a href="sass.html">Javascript</a></li>
          </ul>
        </div>
      </nav>
      
    )
  }
}

export default NavBar;
