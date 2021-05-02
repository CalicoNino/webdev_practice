import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Search extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <h5 className="text-left my-2">Quick Search</h5>
                <p className="text-left">
                    Enter a keyword or a hashtag to search available ratings:
                </p>
                <div className="text-left form-group">
                    <textarea className="form-control" rows="2" id="search"></textarea>
                </div>
                <button onClick={() => this.props.toSearch(document.getElementById("search").value)} className="btn btn-warning btn-sm float-right">Search</button>
                <br/>
                <br/>

                <p className="text-left">Your Results:</p>
                <div className="card bg-light text-dark" id="results">
                    {this.props.searchResults}
                </div>
                <br/>
                <p className="text-left">Top Used Hashtags Today:</p>
                <div className='card bg-secondary'>
                    <h6>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Geography 🗺️</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Biology 🧬</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Cooking 🧪</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Chemistry</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Arts&Crafts 🎨</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Music 🎼</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Software 💻</span>
                        <span className='badge badge-pill badge-dark text-light m-1'>#Literature 📚</span>
                    </h6>                          
                </div><hr/>
                <Link to='/createpost' className="btn btn-warning btn-block btn-lg mb-3 float-left">Create a post</Link><br/>
            </React.Fragment>
        );
    }
}
 
export default Search;