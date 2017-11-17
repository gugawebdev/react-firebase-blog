import React, {Component} from 'react'
import connect from 'react-redux'
import {bindActionCreators} from 'redux'

class UpdateForm extends Component{
    render(){
        return(
            <form></form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
