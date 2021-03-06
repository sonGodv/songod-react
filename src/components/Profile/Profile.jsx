import React from "react"
import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return <div>

        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
    </div>
}

export default Profile;
