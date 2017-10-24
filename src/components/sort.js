import React, { Component } from 'react'

class SortSelect extends Component {
  render () {
    return (
      <div className="row" id="sort-select">
        <div className ="col s5 offset-s7 m4 offset-m8 l3 offset-l8">
          <select className="browser-default" default='0'>
            <option value="0" disabled>Sort By...</option>
            <option value="1">Vote</option>
            <option value="2">Category</option>
            <option value="3">Comments</option>
          </select>
        </div>
      </div>
    )
  }
}

export default SortSelect;
