import React from 'react'
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';

import TodoItem from './Todo'

const TodoList = ({todos, onRemoveTodo}) => {
  
  return (
      <ul>
        {todos.map(todo => (
          <section key={todo.id}>
            <TodoItem
              todo={todo}
              remove={onRemoveTodo}
            />
          </section>
        ))}
      </ul>
  )
}

export default TodoList