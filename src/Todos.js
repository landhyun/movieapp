import React, { useState } from "react";

function Todos() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setTodo(event.currentTarget.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodos((currentArray) => [todo, ...currentArray]);
    console.log(todos);
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
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
