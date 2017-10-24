import React, { Component } from 'react'

class AddPostButton extends Component {
  render () {
    return (
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red waves-effect">
          <i className="large material-icons">add</i>
        </a>
      </div>
    )
  }
}

export default AddPostButton;
