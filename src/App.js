import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const onChange = (event) => {
        setTodo(event.currentTarget.value)
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (todo === "") {
            return;
        }
        setTodo("");
        setTodos((currentArray) => [todo, ...currentArray]);
        console.log(todos);
        const list = document.createElement("li");
        list.innerHTML = {todo};
    };
    return (
        <div>
        <h1>My todo list : {todos.length}</h1>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={todo}
            type="text"
            placeholder="to do"
            />
        <button>Add todo</button>  
        </form> 
        <ul>
        </ul>    
      </div>
    );
}

export default App;