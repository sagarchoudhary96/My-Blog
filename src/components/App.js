import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NavBar from './navBar'
import PostListView from './PostListView'
import AddPost from './addPost'

class App extends Component {

  render() {
    return (
      <div  className="app">
        <NavBar/>
        <div className="container">
          <Route exact path='/' component = {PostListView}/>
          <Route exact path='/:category' component = {PostListView}/>
          <Route exact path='/:category/:id' component = {PostListView}/>
          <Route exact path='/post/add/new' component = {AddPost} />
        </div>
      </div>
    );
  }
}

export default App;
