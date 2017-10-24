import React, { Component } from 'react'

class HomeButton extends Component {
  render () {
    return (
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red waves-effect">
          <i className="large material-icons">home</i>
        </a>
      </div>
    )
  }
}

export default HomeButton;
