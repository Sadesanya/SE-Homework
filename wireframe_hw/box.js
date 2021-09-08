import React from 'react'

function Box(props){
    return ( 
    <div className="box__container">
    <h4>{props.hname}</h4>
    <p>{props.disnum}</p>
    <p>{props.num2}</p>
    <p>{props.num3}</p>
    
    </div>

    )
}

export default Box;