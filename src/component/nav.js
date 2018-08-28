import React from 'react';
import './nav.css';
import logo from '../assets/ic-logo.png';
const Nav=()=>{
    const white={
        color: "#FFF",
        marginRight:"16px"
    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="col-sm-4">
                <a className="navbar-brand float-left" href="#">
                <img src={logo} className="logo" alt="logo" />
                </a>
                </div>
                <div className="col-sm-8">
                <div className="float-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav  ">
                    <a className="nav-item nav-link " style={white} href="#">Suggested Topics <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" style={white} href="#">Favorites</a>
                    <a className="nav-item nav-link" style={white}  href="#">Bookmarks</a>
                    <a className="nav-item nav-link nav-Active" style={white}  href="#">Editorial Picks</a>
                    </div>
                </div>
                </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav;