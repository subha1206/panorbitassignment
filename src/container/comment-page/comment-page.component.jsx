/* eslint-disable eqeqeq */
import React from 'react'
import CommentList from '../../component/comments/comments.component'

import './comment-page.styles.scss'

const CommentPage = ({ getComment, currentuser, comments, users, showComments}) => {
   
    const userprofile = users.filter((user) => user.id == currentuser)
                              .map(({profilepicture}) => {
                                  return encodeURI(profilepicture)        
                              })
        
    return(
        <div className={`comments-page ${showComments}`} id={currentuser}>
            <CommentList getComment={getComment} currentuser={currentuser} comments={comments}/>
            <br />
            <hr />
            <form action="">
                <img src={userprofile[0]} alt="user" />
                <input type="text" name="" id={currentuser} placeholder='Add Comment'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CommentPage;