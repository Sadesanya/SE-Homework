import './App.css';
import React, { Component } from 'react';
import List from './List.js'




export default class  App extends Component{
    state = {
            item: '',
            units: '',
            quantity: '',
        groceries:[
          {
            item: 'Apples',
            units: 3,
            quantity: 5,
            isPurchased: false
          }
          ,

          {
            item: 'Grapes',
            units: 2,
            quantity: 5,
            isPurchased: false
          }
            ,
          {
            item: 'Rice',
            units: 1,
            quantity: 1,
            isPurchased: false
          }
        ]
        }

      
    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.setState({ isPurchased: true })
        let newItem = {
            item: this.state.item ,
            units:this.state.units ,
            quantity:this.state.quantity ,
            isPurchased:true
            }
        this.setState ({
            groceries: this.state.groceries.concat(newItem),
            item:'',
            units:'',
            quantity:'',
        })
    }

  render() { 
        console.log(this.state)
    return (  
        <div>
        <form onSubmit={this.handleSubmit}>
    

            <label htmlFor="item">Item:</label>
            <input 
                id="item" 
                onChange={this.handleChange}
                value={this.state.item}
                type="text"
                
            />
            <br></br>
            <label htmlFor="units">Units:</label>
            <input 
                id="units" 
                onChange={this.handleChange}
                value={this.state.units} 
                type="number"
            />
            <br></br>

            <label htmlFor="quantity">Quantity:</label>
            <input 
                id="quantity" 
                onChange={this.handleChange} 
                value={this.state.quantity}
                type="number"
            />
            <br></br>
            
            {/* <button>Purchase</button> */}
            <button>Add to List</button>


        </form>
        
        <List list = {this.state.groceries} />
        </div>


    );
}
}

