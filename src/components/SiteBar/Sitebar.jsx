import React from "react"
import classes from './SiteBar.module.css'
import Friend from "./Friend";

const Friends = (props) => {

    let friendsElements = props.state.sitebar.map(f => <Friend friends={f.name}/>);

    return (

        <div className={classes.friends}>
            <h3>My friends</h3>
            <div className={classes.friends}>
                {friendsElements}
            </div>
        </div>)
}

export default Friends;
