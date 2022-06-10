import React from "react"
import Preloader from "../../common/preloader/preloader"
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    
    return (
        <div>
            <img src='https://blog.colobridge.net/wp-content/uploads/2018/12/63_750x410_blog.png'/>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
