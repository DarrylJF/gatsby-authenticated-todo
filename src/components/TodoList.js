import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const TodoList = ({todos, onRemoveTodo}) => {
  
  return (
    <section>
      <h2>Loaded Todo List</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{border: "1px solid black", marginBottom: "5px", cursor: "pointer"}}>
            <span>{todo.name}</span>
            <span>{todo.todo}</span>
            <span>{todo.priority}</span>
            <span>
              <DeleteIcon onClick={() => onRemoveTodo(todo.id)}/>
              <EditIcon/>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TodoList