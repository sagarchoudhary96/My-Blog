import React, { Component } from 'react'
import AddPostButton from './addPostButton'
import PostCard from './PostCard'
import SortSelect from './sort'

class PostListView extends Component {
  render () {
    return (
      <div>
        <SortSelect/>
        <PostCard/>
        <AddPostButton/>
      </div>
    )
  }
}

export default PostListView;
