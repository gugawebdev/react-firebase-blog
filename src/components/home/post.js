import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Post extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props)
    }
    render(){
        return(
            <div className="col-md-3">
                <Link to={`/post/${this.props.id}`}>{this.props.title}</Link>
                <div>{this.props.content}</div>
                <div>{this.props.id}</div>

            </div>
        )
    }
}

export default Post