import React, { useState, useEffect } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
  editing,
  view,
  viewNone,
  editingNone
} from '../styles/Todo.module.scss'

const TodoItem = ({todo, remove}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState('')
  const [editedTodo, setEditedTodo] = useState('')
  const [editedPriority, setEditedPriority] = useState('')

  useEffect(() => {
    setEditedName(todo.name)
    setEditedTodo(todo.todo)
    setEditedPriority(todo.priority)
  }, [])

  const isEditingHandler = () => {
    setIsEditing(!isEditing)
    setEditedName(todo.name)
    setEditedTodo(todo.todo)
    setEditedPriority(todo.priority)
  }

  const onSubmitHandler = () => {
    setEditedName(editedName)
    setEditedTodo(editedTodo)
    setEditedPriority(editedPriority)
    setIsEditing(false)
  }
 
  return (
      <li>
        <div className={isEditing ? viewNone : view}>
          <span>{editedName}</span>
          <span>{editedTodo}</span>
          <span>{editedPriority}</span>
          <span>
            <DeleteIcon onClick={() => remove(todo.id)}/>
            <EditIcon onClick={isEditingHandler}/>
          </span>
        </div>
        <div className={isEditing ? editing : editingNone}>
          <span>
            <label>
              Name
              <input type="text" value={editedName} onChange={event => setEditedName(event.target.value)}/>
            </label>
          </span>
          <span>
            <label>
              Todo
              <input type="text" value={editedTodo} onChange={event => setEditedTodo(event.target.value)}/>
            </label>
          </span>
          <span>
            <label>Priority</label>
              <select value={editedPriority} onChange={event => setEditedPriority(event.target.value)}>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
          </span>
          <button onClick={onSubmitHandler}>Submit</button>
          <button onClick={isEditingHandler}>Cancel</button>
        </div>
      </li>
  )
}

export default TodoItem