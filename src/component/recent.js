import React ,{Fragment} from 'react';
import './recent.css';
const Recent=(props)=>{
    return(
        <Fragment>
        <span className="layer" item={props.item}>{props.item}</span>
        </Fragment>
        
    )
}
export default Recent;