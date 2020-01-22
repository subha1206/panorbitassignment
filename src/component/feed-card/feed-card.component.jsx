import React from 'react'
import Like from '../../assets/like.png'
import Comment from '../../assets/comment.png'

import './feed-card.styles.scss'

const  FeedCard = ({users, posts, currentuser, getComment, feedstatus}) => {
    // eslint-disable-next-line eqeqeq
    let postsdetails = posts.filter((posts) =>  posts.userId == currentuser )
                            .map(({userId, id , title, image, time}) => {
         return (
            <div className={`container ${feedstatus}`} key={id} id={userId} >
                <div className='feed-user'>
                    <img classname="user-image" src={users[currentuser - 1].profilepicture } alt="user"  />
                    <span>{users[currentuser - 1].name}</span>
                </div>
                <div className='feed-header'>
                    <h3>{title}</h3>
                    <span>{time}</span>
                </div>
                <div className='feed-photo'>
                    <img src={image} alt="" width='100%' height='250px'/>
                </div>
                <div className='feed-function'>
                    <div className='like-comments'>
                        <img src={Like} alt="" />
                        <img src={Comment} alt="" />
                        <span>5 comments</span>
                    </div>
                    <div className='add-comment' id={userId} onClick={getComment}>
                        <span>Add Comment</span>
                        <img src={users[currentuser - 1].profilepicture} alt="" />
                    </div>
                </div>
            </div>
        )
    }
    )
        return (
            postsdetails
        )
    }


export default FeedCard;