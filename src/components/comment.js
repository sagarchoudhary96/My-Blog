import React, { Component } from 'react'
import TimeStamp from 'react-timestamp'

class Comment extends Component {
  render () {
    return (
      <div className="row">
        <div className="col s2 m1 postcard-votes">
          <a className="btn-flat medium">
            <i className="material-icons">expand_less</i>
          </a>
          <span id="comment-vote">{this.props.comment.vote}</span>
            <a className="btn-flat medium">
              <i className="material-icons">expand_more</i>
            </a>
        </div>
        <div className="col s10 m11">
          <h5 id="comment-body">{this.props.comment.content}</h5>
          <div>
            <span id="comment-author">{this.props.comment.author}</span> posted on <span id="comment-date"><TimeStamp time={this.props.comment.time} format='date'/></span>
              <div className="comment-edit right">
                <a href="">
                    <i className="material-icons grey-text text-darken-2">edit</i>
                </a>
                <a href="">
                    <i className="material-icons grey-text text-darken-2">delete_sweep</i>
                </a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Comment;
