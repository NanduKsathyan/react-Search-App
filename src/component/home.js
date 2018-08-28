import React, { Component } from 'react';
import Nav from './nav';
import Search from './search';
import Recent from './recent';
class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="container">
                <Nav/>
                <Search/>
                </div>
            </div>
        )
    }
}
export default Home;