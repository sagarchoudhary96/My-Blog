import React, { Component } from 'react'
import Comment from './comment'
import {getComments as requestComments} from '../utils/api'
import {getComments} from '../actions/commentActions'
import { connect } from 'react-redux'

class Comments extends Component {

  componentDidMount() {
    requestComments(this.props.id).then(comments=> this.props.dispatch(getComments(comments)))
  }

  render () {
    const comments = this.props.comments
    return (
      <div className="card-action">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="col s12">
                   <input placeholder="Enter your Comments" id="comment_input" type="text" className="validate"/>

              </div>
              <div className="col s8 m10 ">
                 <input placeholder="Comment Author" id="comment_input" type="text" className="validate"/>
              </div>
              <div className="col s4 m2">
                <button className="btn waves-effect waves-light right" type="submit" name="action">
                  <i className="material-icons center">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
        {comments.map(comment=>(
          <Comment key={comment.id} comment = {comment}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
 comments: state.Comments.comments,
})

export default connect(mapStateToProps)(Comments);
