import './App.css';
import React, { useState, useRef, useEffect } from 'react';

function App() {
  /* Create a state like property for a function component
     the variable "todo" is assigned to an empty array 
     that will store things "todo" */
  const [todo, setTodo] = useState([]);

/*useref must be declared before use in function component
    (in this case useRef is declared empty)
    could have used class component, but scope of hw
    
    useRef holds a mutable value in its .current property.
    The mutable value is the user's input */
  let addItemRef = useRef();
  useEffect(() => {
    addItemRef.current.focus();
  }, []);

  /* The handleSubmit function creates new task
     todo immediately after user input task!
     
     Receives user's input --- done by id
     Reassigns todo to equal user's input  --- done by ref & useRef
     Add user's input to "todo" array --- done with concat

     New issue arose!!
     reset value in the form input --- done by reassigning empty string*/
  function handleSubmit(event){
    event.preventDefault(); 
    let formData = [
      {
        addItem: addItemRef.current.value,  
      }
    ]
  
console.log(formData.addItem)
console.log(formData)
setTodo((prevState) => prevState.concat(formData));
addItemRef.current.value = ""
// ^^ resets the form
console.log(todo)
  }
console.log("Outside of handleSubmit ", todo)

const deleteId = (id) => {
  setTodo((prevState) => prevState.filter(( _, completedTask)=> completedTask !== id));
}; 


  return (
    <div className="App">
        <h2>My To-Do List</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item:</label>
        <input id="addItem" ref={addItemRef} type="text" required />
        <button>Add Todo</button>
      </form>
      <ol>
        {todo.map((list, indx) => (
          <li type="checkbox" key={indx}>
            <input id="" type="checkbox" />

            {list.listItem}
            {list.addItem}
            <button onClick={() => deleteId(indx)}>Complete</button>
          </li>
        ))}
      </ol>
          </div>
          
  );
}

export default App;
