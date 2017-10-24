import React, { Component } from 'react'

class CardAction extends Component {
  render () {
    return (
      <div className="card-action">
          <a>23 comments</a>
          <i className="material-icons small right postcard-edit">delete</i>
          <i className="material-icons small right postcard-edit">edit</i>
      </div>
    )
  }
}

export default CardAction;
