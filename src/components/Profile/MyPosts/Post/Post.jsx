import React from "react"
import classes from './Post.module.css'

const Post = (props) => {
  return (

    <div className={classes.item}>
      <img src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"/>
      {props.message}
      <div>
        <span>like {props.likesCount}</span>        
      </div>

    </div>)

}

export default Post;
