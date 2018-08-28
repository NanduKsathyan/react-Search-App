import React from 'react';
import './navsecond.css';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import logo from '../assets/ic-logo.png';
const Detailnav=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light content-nav ">
                <div className="col-sm-4">
                <a className="navbar-brand float-left" href="#">
                <Link to="/"><img src={logo} className="logo2" alt="logo" /></Link>
                </a>
                </div>
                <div className="col-sm-8">
                <div className="float-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav  ">
                    <a className="nav-item nav-link " href="#">Suggested Topics <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Favorites</a>
                    <a className="nav-item nav-link" href="#">Bookmarks</a>
                    <a className="nav-item nav-link nav-Active" href="#">Editorial Picks</a>
                    </div>
                </div>
                </div>
                </div>
            </nav>
        </div>
    )
}
export default Detailnav;