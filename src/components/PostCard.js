import React, { Component } from 'react'
import CardContent from './cardContent'
import CardAction from './cardActions'
class PostCard extends Component {
  render () {
    return (
      <div className="row postcard">
        <div className="col s12 m12 l10 offset-l1">
          <div className="card">
            <CardContent/>
            <CardAction/>
          </div>
        </div>
      </div>
    )
  }
}

export default PostCard;
