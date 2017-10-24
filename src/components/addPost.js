import React, { Component } from 'react'
import HomeButton from './homeButton'
class AddPost extends Component {
  render () {
    return (
      <div className="row">
        <form className="col s12 l8 offset-l2" id="post-form">
          <div className="row">
            <div className="input-field col s12">
              <input id="post-title" type="text" className="validate"/>
              <label htmlFor="post-title">Post Title</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input id="post-author" type="text" className="validate"/>
              <label htmlFor="post-author">Post Author</label>
            </div>
            <div className="col s6">
              <label>Category</label>
              <select defaultValue="0" className="browser-default">
                <option value="0" disabled>Choose your option</option>
                <option value="1">Sass</option>
                <option value="2">Component</option>
                <option value="3">Javascript</option>
              </select>

            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="post-body" className="materialize-textarea"></textarea>
              <label htmlFor="post-body">Post Content</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
        <HomeButton/>
      </div>
    )
  }
}

export default AddPost;
