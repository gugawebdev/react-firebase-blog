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


class App extends Component {

  constructor(props){
    super(props)

  }
  
  componentDidMount(){
    this.props.fetchDataListener()
    setInterval(()=>{
      this.props.insertDataListener({title:'test', content:'random stuff'})
    },10000)
  }



  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
          
          <Route path="/" component={Home} exact/>
          <Route path="/contact" component={Contact} exact/>
            
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
