import React, { Component } from 'react';
import NavBar from './navbar';
import Post from './post';
import Search from './search';

class Feed extends Component {

    addComment = (id) => {
        var comment = prompt("What is your comment?")
        if(!comment){
            const posts = [...this.state.posts];
            posts[id].comments.push(comment);
            this.setState({posts})
        }  
    }

    render() {
        console.log(this.props.posts)
        console.log(this.props.edit)
        return (
            <React.Fragment>
                <NavBar />
                <div className="caption-text text-center my-2">
                    <div className="row mx-auto">
                        <div className="mx-5 col-8 rounded bg-dark">
                        <h1 className="text-left my-3 mx-4">Feed</h1>
                        { this.props.posts.slice(0).reverse().map( post =>
                            <Post
                            key={post.id}
                            id={post.id}
                            created={post.created}
                            title={post.title}
                            score={post.score}
                            context={post.context}
                            groups={post.groups}
                            items={post.items}
                            comments={post.comments}
                            editPost={this.props.editPost}
                            deletePost={this.props.deletePost}
                            addComment={this.props.addComment}
                            deleteComment={this.props.deleteComment}
                            addScore={this.props.addScore}
                            />
                        )}
                        </div>
                        <div className="col-sm-3 bg-dark rounded h-100">
                            <Search
                            key="0"
                            searchResults={this.props.searchResults}
                            toSearch={this.props.toSearch}/>
                        </div>
                    </div>
                </div>
            </React.Fragment> 
        );
    }
}
 
export default Feed;
