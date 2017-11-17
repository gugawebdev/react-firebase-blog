import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as postActions from '../../actions/posts'

class BlogPost extends Component{
    constructor(props){
        super(props)


        this.deletePost = this.deletePost.bind(this)
    }

    componentWillMount(){
    }

    componentDidMount(){
        this.props.fetchPost(this.props.match.params.id)                    
    }

    //Create action to delete
    deletePost(){
        this.props.deleteDataListener(this.props.match.params.id)
        this.props.history.push('/')
    }



    render(){
        
            while(this.props.posts.post === undefined){
                return (

                    <h2>loading content...</h2>
                )
            }

            return(
                <div>
                    <div>{this.props.posts.post.title}</div>
                    <div>{this.props.posts.post.id}</div>
                    <div>{this.props.posts.post.content}</div>
                    <button onClick={this.deletePost}>Delete</button>     
                </div>
            )
        
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(postActions, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(BlogPost)

