import React,{Fragment,Component} from 'react';
import Detailnav from './navsecond';
import Topics from './topics';
//import logo from '../assets/img-01.jpg';
class Content extends Component{
    
    constructor(){
        super();
        this.state={
            items:[],
            isLoaded:false
        }
       
    }
    componentDidMount(){
        let searchItem=this.props.match.params.name;
        if(searchItem){
            fetch('https://jsonplaceholder.typicode.com/photos').
            then((res)=> res.json()).
            then(data =>{
                
                let cleanData= data.filter(
                    (items) =>{
                        return items.title.indexOf("reprehenderit est deserunt velit ipsam") !== -1;
                    }
                )
                if(cleanData){
                    this.setState({
                        isLoaded:true,
                        items:cleanData
                    })
                }
                console.log(cleanData);
            });
        }
        
    }
    render(){
        let  {isLoaded, items} = this.state;
        if(!isLoaded){
            return(
                <div>Loading...</div>
            )
        }else{
    return(
        <Fragment>
             
                <div className="container">
                <Detailnav/>
                <div className="row">
                <div className="col-sm-4">
                    <img src={this.state.items[0].thumbnailUrl} className="logo img-fluid" alt="logo" />
                </div>
                <div className="col-sm-8">
                        <h1>{this.props.match.params.name}</h1>
                        <h5>{this.state.items[0].title}</h5>
                        <Topics/>
                </div>
            </div>
                </div>
            

        </Fragment>
    )
}
}
}
export default Content;