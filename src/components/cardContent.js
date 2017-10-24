import React, { Component } from 'react'

class CardContent extends Component {
  render () {
    return (
      <div className="card-content">
        <h5 className="postcard-title"><a>Learn Redux in 10 minutes!</a></h5>
        <span className="badge blue white-text">redux</span>
        <div className="chip postcard-author">
          <img src="images/yuna.jpg" alt="Contact Person"/>
          thingone
        </div>
        <div className="row">

          <div className="col s2 m1 postcard-votes">
            <a className="btn-flat medium">
              <i className="material-icons">expand_less</i>
            </a>
            <span>100</span>
              <a className="btn-flat medium">
                <i className="material-icons">expand_more</i>
              </a>
          </div>
          <div className="col s10 m11">
            <p>Just kidding. It takes more than 10 minutes to learn technology.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CardContent;
