import React from 'react';
import './App.css';
import Header from './component/header/header.component'
import SelectUser from './component/select-user/select-user.component'
import CommentsPage from './component/comments/comments.component'
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
      isCommentLoaded: false
    }
    this.getUser = this.getUser.bind(this)
    this.getComment = this.getComment.bind(this)
  }  
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://panorbit.in/api/users.json')
      .then(response => response.json())
      .then(data => this.setState({ users: data.users, isLoading: true }))
      .then(fetch(`https://panorbit.in/api/posts.json`)
            .then(res => res.json())
            .then(data => this.setState({posts: data.posts, isLoading: false,}))
      )
}


getUser (event) {
   console.log(event.target.id)
  this.setState({currentuser: event.target.id, feedstatus: ''})
}


getComment () {
  fetch(`https://panorbit.in/api/comments.json`)
    .then(res => res.json())
    .then(data => this.setState({comments: data.comments, isCommentLoaded: true, feedstatus: 'hide'}))
}

 render(){
    const { isLoading, users, posts, currentuser, comments, feedstatus} = this.state
    console.log(comments);
    
    if(!isLoading){
      return(
      <div className="App">
        <Header users={users} click={this.getUser} currentuser={currentuser}/>
        <SelectUser click={this.getUser} users={users} />
        <FeedCard 
          users={users} 
          posts={posts} 
          currentuser={currentuser} 
          getComment={this.getComment}
          feedstatus={feedstatus}
        /> 
        <CommentsPage 
          getComment={this.getComment} 
          currentuser={currentuser} 
          comments={comments}
        />
      </div>
      )
    } else return(
      <div>Loading...</div>
    )

}
}

export default App;
