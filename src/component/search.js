import React,{Component} from 'react';
import Recent  from './recent';
import {BrowserRouter as Router,Link} from 'react-router-dom';
class Search extends Component{
    state={
        userInput:'',
        items:[
            {name:'Effiel Tower'},
            {name:'Trigonometry'},
            {name:'Why Mars?'},
            {name:'Iron and White'},
            {name:'Time Travel'}

        ]
    }
    changeUserInput(input){
        this.setState({
            userInput:input
        });
    }
    addItem=(input)=>{
        let listArray=this.state.items;
        listArray.push({name:input});
        this.setState({
            userInput:'',
            items:listArray
        });
    }
    render(){
        return(
            <div className="search">
                <input type="text" className="input-decorator" placeholder="Search" onChange={(e)=>this.changeUserInput(e.target.value)} value={this.state.userInput}/>
                <button className="BG" onClick={()=> this.addItem(this.state.userInput)}>
                    Click Me
                </button>
               
                <br/>
                <br/>
                <span className="white-color">Recent <br/>Searches</span>
                {
                    this.state.items.map((item,index)=>{
                        return (
                            <Link to={"/details/"+item.name} ><Recent item={item.name} key={index} className="round-link"/></Link>)
                    })
                }
               <Recent item="Show ALl"/>)
                
            </div>
        )
    }
}
export default Search;