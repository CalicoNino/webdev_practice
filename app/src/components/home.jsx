import React from 'react';
import home from '../visuals/home.mp4';
import school from '../visuals/school.png';
import NavBar from './navbar';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <React.Fragment>
            <NavBar />    
            <div className="video-background">
                <div className="video-wrap">
                    <div id="video">
                        <video id="bg-vid" autoPlay loop muted playsInline>
                            <source src={home} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            <div className="caption text-center">
                <h6 className="title-font">
                    Where you pick your next great school project idea! 
                    <img src={school} width="25" height="25" className="text-left mx-2" alt="school"/>
                </h6>
                <Link to='/feed' className="btn btn-outline-light btn-lg font-weight-bold my-3">Begin</Link>
            </div>
        </React.Fragment>
    );
}

export default Home;