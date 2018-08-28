import React from 'react';
// import './navsecond.css';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import logo from '../assets/ic-logo.png';
const Detailnav=()=>{
    const black={
        color: "#000",
        marginRight:"16px"
    }
    const inverLogo={
        filter: "invert(100%)",
        marginLeft: "-15px"
    }
    const navActive={
        width: "138px",
      height: "40px",
      borderRadius: "30px",
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: "solid 1px #000",
      color: "#000",
        marginRight:"16px",
        textAlign:"center"

    }
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light content-nav ">
                <div className="col-sm-4">
                <a className="navbar-brand float-left" style={inverLogo} href="#">
                <Link to="/"><img src={logo} className="logo2" alt="logo" /></Link>
                </a>
                </div>
                <div className="col-sm-8">
                <div className="float-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav  " >
                    <a className="nav-item nav-link " style={black} href="#">Suggested Topics <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" style={black} href="#">Favorites</a>
                    <a className="nav-item nav-link" style={black} href="#">Bookmarks</a>
                    <a className="nav-item nav-link" style={navActive} href="#">Editorial Picks</a>
                    </div>
                </div>
                </div>
                </div>
            </nav>
        </div>
    )
}
export default Detailnav;