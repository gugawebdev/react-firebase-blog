import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as postsActions from './actions/posts'
import database from './config/config'


//COMPONENTS IMPORTS
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import BlogPost from './components/blog_post/blogPost'


class App extends Component {

  constructor(props){
    super(props)

  }
  
  componentDidMount(){
    this.props.fetchDataListener()

  }
  



  render() {
    return (
      
      <BrowserRouter>
      
        <div>
        
        <Header />

          <Switch>
          
          <Route path="/" component={Home} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route path="/post/:id" component={BlogPost} exact/>  

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(postsActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
