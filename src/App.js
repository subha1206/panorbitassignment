import React from 'react';
import './App.css';
import Header from './component/header/header.component'
import CommentPage from './container/comment-page/comment-page.component'
import FeedCard from './component/feed-card/feed-card.component'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      posts:[],
      comments:[],
      currentuser: 1,
      isLoading: false,
      feedstatus: '',
      showComments: '',
      showUser:false,
    }
    this.getUser = this.getUser.bind(this)
    this.getComment = this.getComment.bind(this)
    this.showuserprofile = this.showuserprofile.bind(this)
  }  
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://panorbit.in/api/users.json')
      .then(response => response.json())
      .then(data => this.setState({ users: data.users, isLoading: true }))
      .then(fetch(`https://panorbit.in/api/posts.json`)
            .then(res => res.json())
            .then(data => this.setState({ posts: data.posts, 
                                          isLoading: false, 
                                          showComments:'hide'})
                  )
      )
}

showuserprofile () {
  this.setState({showUser: true})
}



getUser (event) {
  this.setState({ currentuser: event.target.id, 
                  feedstatus: '', 
                  showUser:false, 
                  showComments:'hide'
                })
}


getComment () {
  fetch(`https://panorbit.in/api/comments.json`)
    .then(res => res.json())
    .then(data => this.setState({ comments: data.comments, 
                                  currentuser: this.state.currentuser, 
                                  isCommentLoaded: true, 
                                  feedstatus: 'hide', 
                                  showComments:''
                                })
          )
}

 render(){
    const { isLoading, users, posts, currentuser, comments, feedstatus, showUser, showComments} = this.state
    if(!isLoading){
      return(
      <div className="App">
        <Header 
          users={users} 
          getuser={this.getUser} 
          showuserprofile={this.showuserprofile} 
          showUser={showUser} 
          currentuser={currentuser}
        />
        <FeedCard 
          users={users} 
          posts={posts} 
          currentuser={currentuser} 
          getComment={this.getComment}
          feedstatus={feedstatus}
        /> 
        <CommentPage 
          getComment={this.getComment} 
          currentuser={currentuser} 
          comments={comments}
          users={users}
          showComments={showComments}
        />
      </div>
      )
    } else return(
      <div>Loading...</div>
    )

}
}

export default App;
