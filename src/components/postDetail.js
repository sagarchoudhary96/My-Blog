import React, { Component } from 'react'
import Comments from './commentsView'
import CardContent from './cardContent'
import CardAction from './cardActions'
import HomeButton from './homeButton'
class PostDetail extends Component {
  render () {
    return (
      <div>
      <div className="row postcard">
        <div className="col s12 m12 l10 offset-l1">
          <div className="card">
            <CardContent/>
            <CardAction/>
            <Comments/>
          </div>
        </div>
      </div>
      <HomeButton/>
    </div>
    )
  }
}

export default PostDetail;
