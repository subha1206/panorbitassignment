/* eslint-disable eqeqeq */
import React from 'react'

import './comments.styles.scss';

const CommentList = ({getComment, comments, currentuser}) => {
    let commentdetails = comments.filter((comments) => comments.userId == currentuser)
    .map(({userId, id , body, time, profilePicture}) => {
    return (
        <div className='comments-list'  key ={id} id={userId} >
            <ul>
                <li>
                    <div className='comments'>
                        <img src={profilePicture} alt="user"/>
                        <span>{body.substr(0,100)+"."}</span>
                    </div>
                </li>
            </ul>
        </div>
    )
})
    return(
        commentdetails
    )
 
}

export default CommentList;