import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Post from './post'

class Home extends Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                {this.props.posts.all && 
                    this.props.posts.all.map(post=>{
                        return <Post key={post.id} {...post} />
                    })
                 }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)