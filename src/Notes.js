import React from 'react' ;
import { Card } from 'react-bootstrap';
import FormTodo from "./FormTodo.js"




  
  function Notes(props) {

    console.log(props)


    const [todos, setTodos] = React.useState([
      {
        text: "This is a sampe todo",
        isDone: false
      }
    ]);
  
    const addTodo = text => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };
  
    const markTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isDone = true;
      setTodos(newTodos);
    };
  
    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      
        <div className="container">
          <h1 className="text-center mb-4">Todo List</h1>
          <FormTodo addTodo={addTodo} />
          <div>
            {todos.map((todo, index) => (
              <Card>
                <Card.Body>
                  { <props.Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  /> }
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
    
    );
  }
  
  export default Notes;