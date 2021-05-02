import React, { Component } from 'react';
import './App.css';
import Home from "./components/home";
import Feed from "./components/feed";
import CreatePost from "./components/createPost";
import EditPost from "./components/editpost";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
    state = { 
      searchResults:"No Results to show.",
      posts:[
          {id:0,
          title: "Help!! Need Ideas for my Geography Project",
          score: [6,10],
          context: "I need to create an interactive project to teach elemantary kids for my primary school education class. I need to teach them about world countries. So far my ideas are to make Web based atlas or Fun educational videos.",
          groups: ["#Assignment ", "#Project ", "#Geography ", "#Kids "],
          created: "0",
          comments: [
            { 
              id:0,
              created:"0",
              text: "Not a bad idea, I would recommend doing videos since more kids are virtual learners. I rated your idea 7/10"
            }
          ]},
          {id:1,
          title: "Rate my idea for my webdev class",
          score: [9,4],
          context: "For my webdev class, we have to think of an idea that will solve issues related to unergraduate students. My idea is to create a website where students can post iddeas relevant to their projects and assignments. Also, other students can comment or rank those ideas.",
          groups: ["#Project ", "#Software ", "#WebDev "],
          created: "0",
          comments: [
            {
              id:0,
              created:"0",
              text: "Great idea!! I rated it 9/10. I would recommend making it more anonymous just incase professors find out about this"},
            {
              id:1,
              created: "0",
              text:"Not really an issue, I think students alreayd have much better resources."}
          ]}
      ],
      edit: {}
  }

  addPost = (title,text,groups,project,assignment) => {
    var finalGroups = []
    if (project) {
      finalGroups.push("#Project ")
    }
    if (assignment) {
      finalGroups.push("#Assignment ")
    }
    finalGroups.push(groups)
    const posts = [...this.state.posts];
    posts.push({
      id: posts.length,
      title: title,
      score: [0,0],
      context: text,
      groups: finalGroups,
      created: "1",
      comments: []
    })
    this.setState({posts});
    alert("Post has been created! Returning to the Feed section to view");
  }

  addEditedPost = (title,text,groups,project,assignment,score,created,comments) => {
    var finalGroups = []
    if (project) {
      finalGroups.push("#Project ")
    }
    if (assignment) {
      finalGroups.push("#Assignment ")
    }
    finalGroups.push(groups)
    const posts = [...this.state.posts];
    posts.push({
      id: posts.length,
      title: title + ' [Edited]',
      score: score,
      context: text,
      groups: finalGroups,
      created: created,
      comments: comments
    })
    this.setState({posts});
    alert("Post has been Edited! Returning to the Feed section to view");
  }

  editPost = (id) =>{
    console.log("Editing post " + id)
    const edit = this.state.posts[id];
    console.log(edit)
    this.setState({edit})
  }

  deletePost = (id) => {
    if(window.confirm("Are you sure you want to delete post?")){
      const posts = this.state.posts.filter(post => post.id !== id);
      for (let i = id; i <= posts.length-1; i++) {
        posts[i].id = posts[i].id - 1;
      }
      this.setState({posts});
      console.log("Post Deleted")
    }
  }

  addComment = (id) => {
      var comment = prompt("What is your comment?")
      if(comment !== ''){
        const posts = [...this.state.posts];
        posts[id].comments.push({
          id: posts[id].comments.length,
          created:"1",
          text: comment
        });
        console.log(posts)
        this.setState({posts})
        console.log("Comment Created")
      }  
  }

  deleteComment = (commentId, postId) => {
    const posts = [...this.state.posts]
    const comments = this.state.posts[postId].comments.filter(i => i.id !== commentId)
    console.log(commentId)
    for (let i = commentId; i <= comments.length-1; i++) {
      comments[i].id = comments[i].id - 1;
    }
    posts[postId].comments = comments
    this.setState({posts});
    console.log(this.state.posts)
    console.log("Comment Deleted")
  }

  addScore = (id) => {
      var rating = parseInt(prompt("What is your rating out of 10? (Any other rating will be disregarded)"))       
      const posts = [...this.state.posts];
      posts[id].score[0] = Math.round((posts[id].score[0]*posts[id].score[1] + rating)/(posts[id].score[1]+1) * 10)/10
      posts[id].score[1] += 1
      if(rating !=='' && rating <= 10 && posts[id].score[0] <= 10 && rating >= 0 ){
          this.setState({posts})
      }  
  }

  toSearch = (keyword) => {
      if(keyword ==="geography") {
          const searchResults = "- ["+ this.state.posts[0].score[0] + "] " + this.state.posts[0].title;
          this.setState({searchResults})
      }
      if(keyword ==="software") {
          const searchResults = "- ["+ this.state.posts[1].score[1] + "] " + this.state.posts[1].title;
          this.setState({searchResults})
      }
      if(keyword ==="project") {
          const searchResults = "- ["+ this.state.posts[0].score[0] + "] " + this.state.posts[0].title +
                          + "\n" + "- ["+ this.state.posts[1].score[0] + "] " + this.state.posts[1].title;
          this.setState({searchResults})
      }
  }

  render() {
      return (
      <Router>
        <div className="App">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/feed' exact render={(props) => 
            <Feed
                posts={this.state.posts}
                edit={this.state.edit}
                searchResults={this.state.searchResults}
                toSearch={this.toSearch}
                deletePost={this.deletePost}
                editPost={this.editPost}
                addComment={this.addComment}
                deleteComment={this.deleteComment}
                addScore={this.addScore}
            />}/>
          <Route path='/createpost' exact render={(props) => 
            <CreatePost 
                addPost={this.addPost}
                searchResults={this.state.searchResults}
                toSearch={this.toSearch}
            />}/>
          <Route path='/editpost' exact render={(props) => 
            <EditPost
                edit={this.state.edit}
                addEditedPost={this.addEditedPost}
                searchResults={this.state.searchResults}
                toSearch={this.toSearch}
            />}/>
        </Switch>
        </div>
      </Router>
  );
  }

}

export default App;
