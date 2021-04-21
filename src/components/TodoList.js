import React from 'react'
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';

import TodoItem from './Todo'

const TodoList = ({todos, onRemoveTodo, onEditTodo}) => {
  
  return (
    <>
    <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <section key={todo.id}>
            <TodoItem
              todo={todo}
              remove={onRemoveTodo}
              edit={onEditTodo}
            />
          </section>
        ))}
      </ul>
    </>
  )
}

export default TodoList