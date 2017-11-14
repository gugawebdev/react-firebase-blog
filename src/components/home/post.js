import React, { Component } from 'react'


const Post = (props) =>{
    return(
        <div>
        <div><h1>{props.title}</h1></div>
        <div>{props.content}</div>
        </div>
    )
}

export default Post