import React from "react"
import classes from './Friend.module.css'

const Friend = (props) => {
  return (

    <div className={classes.item}>
      <img src="https://www.mann-ivanov-ferber.ru/assets/images/covers/87/27087/1.00x-thumb.png"/>
      {props.friends}
    </div>)

}

export default Friend;
