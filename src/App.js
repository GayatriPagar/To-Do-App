import React from "react";
import "./App.css";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notes from "./Notes.js"


function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
      </div>
    </div>
  );
}
//declaration
function App(){
  return(
    <div className="app">
      <Notes Todo={Todo} />
      {/* <FormTodo Todo={Todo} /> */}
    </div>
  );
}

export default App;