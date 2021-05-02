import React, { Component } from 'react';
import Comment from './comments';
import '../App.css';
import {Link} from 'react-router-dom';

class Post extends Component {
    render() { 
        return (
            <div className="my-4">
                <div className="container border-top rounded border-light">
                    <div className="row">
                        <div className="col-9 m-auto">
                            <div className="row">
                                <h2 className="text-left m-3">{this.props.title}</h2>
                                {
                                    this.props.created ==="1" ?
                                    <div className="float-right">
                                        <Link to="/editpost" onClick={() => this.props.editPost(this.props.id)} className="btn btn-sm btn-primary my-2 mx-5">Edit Post</Link>
                                        <button onClick={() => this.props.deletePost(this.props.id)} className="btn btn-sm btn-danger my-2">Delete Post</button>
                                    </div>
                                    :null
                                } 
                            </div>
                            <div className="row-lg-10">
                                <div className="col min-h card bg-light text-dark text-left">
                                    {this.props.context}<br/>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-2 bg-dark border-0 mx-3 my-3">
                            <div className="row m-auto card bg-success font-weight-bold text-light rounded">
                            &nbsp;
                                <h2 className="text-center">&nbsp;&nbsp;&nbsp;{this.props.score[0]}&nbsp;&nbsp;&nbsp;</h2>/10
                            </div>
                            <div className="row m-auto"><button className="btn btn-warning m-auto btn-block" onClick={() => this.props.addScore(this.props.id)}>Rate</button></div>
                        </div>
                    </div>
                    <div className="row mx-4 my-3">
                        <button onClick={() => window.confirm("Any available files should be downloading right now.")} className="btn btn-sm btn-primary mx-2 float-left">Click to view available attached files</button>
                        <div className="m-auto float-left">{this.props.groups}</div>
                        <button className="btn btn-sm btn-primary mx-2 float-right" onClick={() => this.props.addComment(this.props.id)}>Add Comment</button>
                        <button onClick={() => prompt("Thank you for flagging! We will be reviewing the Post and Comments for any inappropriate behaviors. Please let us know what was disturbing about the post:")} className="btn btn-sm btn-danger mx-2 float-right">Flag</button>
                    </div>
                </div>
                { this.props.comments.map( comment =>
                    <Comment
                        key={comment.id}
                        id={comment.id}
                        postId={this.props.id}
                        created={comment.created}    
                        comment={comment.text}
                        deleteComment={this.props.deleteComment}
                    />
                )}
            </div>
        );
    }
}
 
export default Post;