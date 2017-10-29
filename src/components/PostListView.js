import React, { Component } from 'react'
import AddPostButton from './addPostButton'
import { connect } from 'react-redux'
import PostCard from './PostCard'
import SortSelect from './sort'
import HomeButton from './homeButton'
import {getAllPosts as requestPosts } from '../utils/api'
import { getAllPosts } from '../actions/postActions'

class PostListView extends Component {

  componentDidMount() {
    requestPosts().then(posts => this.props.dispatch(getAllPosts(posts)))
  }
  
  render () {
    const Posts = this.props.match.params.category ?
      this.props.Posts[this.props.match.params.category] :
      this.props.Categories.reduce((acc,curr) =>{
        return acc.concat(this.props.Posts[curr.path])
      }, [])

    return (
      <div>
        <SortSelect/>
        {Posts.map(post => (
          <PostCard post = {post} key={post.id}/>
        ))}

        {this.props.match.params.id &&(
          <HomeButton/>
        )}
        <AddPostButton/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
Posts: state.Posts.allPosts,
Categories: state.Category.categories
})
export default connect(mapStateToProps)(PostListView)
