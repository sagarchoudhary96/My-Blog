import React, { Component } from 'react'
import Comments from './commentsView'
import {withRouter, Link } from 'react-router-dom'

class PostCard extends Component {
  render () {
    const post = this.props.post
    return (
      <div>
        <div className="row postcard">
          <div className="col s12 m12 l10 offset-l1">
            <div className="card">
              <div className="card-content">
                <h5 className="postcard-title"><Link to={`/${post.category}/${post.id}`}>{post.title}</Link></h5>
                <span className="badge blue white-text">{post.category}</span>
                <div className="chip postcard-author">
                  <img src="/images/yuna.jpg" alt="Contact Person"/>
                  {post.author}
                </div>
                <div className="row">

                  <div className="col s2 m1 postcard-votes">
                    <a className="btn-flat medium">
                      <i className="material-icons">expand_less</i>
                    </a>
                    <span>{post.vote}</span>
                      <a className="btn-flat medium">
                        <i className="material-icons">expand_more</i>
                      </a>
                  </div>
                  <div className="col s10 m11">
                    <p>{post.content}</p>
                  </div>
                </div>
              </div>
                <div className="card-action">
                    <Link to={`/${post.category}/${post.id}`}>{post.commentCount}</Link>
                    <Link to='/'><i className="material-icons small right postcard-edit black-text">delete</i></Link>
                    <Link to='/'><i className="material-icons small right postcard-edit black-text">edit</i></Link>
                </div>
                {this.props.match.params.id &&(
                  <Comments id= {this.props.post.id}/>
                )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PostCard);
