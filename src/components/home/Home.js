import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Home extends Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div>
                <h1>home</h1>
                {this.props.posts.length >0 && 
                   this.props.posts[0].map(post=>{
                       return <h1 key={post.id}>{post.title}</h1>
                   })
                }
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