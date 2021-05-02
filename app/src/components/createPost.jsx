import React, { Component } from 'react';
import NavBar from './navbar';
import Search from './search';
import {Link} from 'react-router-dom';
import books from '../visuals/books.jpeg'

class CreatePost extends Component {
    state = { 
        title: "",
        text: "",
        groups: "",
        project: true,
        assignment: true
    }

    handleCheckbox = (e) => {
        this.setState({[e.target.id]: e.target.checked});
    }

    handle = (e) => {
        this.setState({[e.target.id]: e.target.value})
        console.log(e.target.id + " changed.")
      }

    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
                <div className="caption-text text-center my-2">
                    <div className="row mx-auto">
                        <div className="mx-5 col-8 rounded bg-dark text-left">
                            <div className="row">
                               <Link to='/feed' className="btn btn-warning m-3 float-left">Return to Feed</Link>  
                            </div>
                            <div className="row mx-3">
                                <div className="col-md-10">
                                    <h3>Create A Post</h3>
                                </div>
                                <Link to="/feed" className="btn btn-lg btn-warning float-right" 
                                    onClick={() => this.props.addPost(this.state.title, this.state.text, this.state.groups,
                                                                            this.state.project, this.state.assignment)}>
                                    Post
                                </Link>
                            </div>
                            <div className="row mx-3">
                                <div className="col-md-10">
                                    <input type="text" id="title" value={this.state.title} onChange={e => this.handle(e)} className="form-control" placeholder="Post Title"/>
                                    <input type="text" id="text" value={this.state.text} onChange={e => this.handle(e)} className="form-control my-2" placeholder="Post Description"/>
                                    <input type="checkbox" id="project"
                                        onChange={this.handleCheckbox} checked={this.state.project} />
                                    <label className="mx-2">Is this project related?</label><br/>

                                    <input type="checkbox" id="assignment"
                                        onChange={this.handleCheckbox} checked={this.state.assignment} />
                                    <label className="mx-2">Is this assignment related?</label><br/>


                                    <input type="text" id="groups" value={this.state.groups} onChange={e => this.handle(e)} className="form-control my-2" placeholder="Add Group using the format: #[Group]"/>
                                    <button className="btn btn-sm btn-warning float-left">Attach a photo or document</button>
                                    <br/>
                                    <br/>
                                    <img src={books} width={1140*0.6} height={361*0.6} className="text-center my-3 rounded" alt="logo"/>
                                </div>
                            </div>
                            
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
 
export default CreatePost;