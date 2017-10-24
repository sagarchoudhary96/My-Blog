import React, { Component } from 'react'

class Comment extends Component {
  render () {
    return (
      <div className="row">
        <div className="col s2 m1 postcard-votes">
          <a className="btn-flat medium">
            <i className="material-icons">expand_less</i>
          </a>
          <span id="comment-vote">100</span>
            <a className="btn-flat medium">
              <i className="material-icons">expand_more</i>
            </a>
        </div>
        <div className="col s10 m11">
          <h5 id="comment-body">Hi This is a Comment</h5>
          <div>
            <span id="comment-author">Admin</span> posted on <span id="comment-date">20 Dec, 2016</span>
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
