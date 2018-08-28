import React,{Component,Fragment} from 'react';
import Recent  from './recent';
import './recent.css';
class Topics extends Component{
    state={
        topic:["History","Literature","Politics","Arts","News","Social"
        ]
    }
    render(){
        return(
            <Fragment>
                <br/>
                <span className="layer2 layer-heighlight">General</span>
                {
                    this.state.topic.map((topic,index)=>{
                        return (
                            <span className="layer2" key={index}>{topic}</span>)
                    })
                }
            </Fragment>
        )
    }
}
export default Topics;