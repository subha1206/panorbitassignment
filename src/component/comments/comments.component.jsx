/* eslint-disable eqeqeq */
import React from 'react'

import './comments.styles.scss';

const CommentsPage = ({getComment, comments, currentuser}) => {
    let commentdetails = comments.filter((comments) => comments.userId == currentuser )
    .map(({userId, id , body, time, profilePicture}) => {
    return (
        <div className='comments-page' key={id} >
            <ul>
                <li>
                    <div className='comments'>
                        <img src={profilePicture} alt="user"/>
                        <span>{body.substr(0,120)+"."}</span>
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

export default CommentsPage;