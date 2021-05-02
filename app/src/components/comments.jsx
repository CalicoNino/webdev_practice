import React, { Component } from 'react';

class Comment extends Component {
    render() { 
        return ( 
            <div className="row mx-2">
                <div className="col-sm-4"></div>
                <div className="col">
                    <div className="m-2 card text-left text-dark">
                        <p className="m-2">
                            {this.props.comment}
                        </p>
                    </div>
                    {
                        this.props.created ==="1" ?
                        <button onClick={() => this.props.deleteComment(this.props.id, this.props.postId)} className="btn btn-sm btn-danger float-right my-2">Delete</button>
                        :null
                    }
                </div>
            </div>
            
        );
    }
}
 
export default Comment;