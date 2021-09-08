import React, { Component }  from "react"

export default class List extends Component {
    
      

    render(){
        
        return(
            <>
           

            {this.props.list.map((listItem,index)=> 
                <ol key={index}>
                    <li>{listItem.item}</li>
                    <li>{listItem.units}</li>
                    <li>{listItem.quantity}</li>
                </ol>
            )}
           
            
            

            </>
        )
    }
};

