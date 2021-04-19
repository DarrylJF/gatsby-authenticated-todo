import React, { useState } from 'react'

import Card from '../UI/Card'
import LoadingIndicator from '../UI/LoadingIndicator'
import ActionMessage from '../UI/ActionMessage'

const TodoListForm = React.memo(props => {
  const {onAddTodo} = props
  const [name, setName] = useState('')
  const [todo, setTodo] = useState('')
  const [priority, setPriority] = useState('')

  const submitHandler = event => {
    event.preventDefault()
    onAddTodo({
      name: name,
      todo: todo,
      priority: priority
    })
  }

  return (
    <section>
      <Card>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="title">Name</label>
            <input 
              type="text"
              value={name}
              onChange={event => {
                setName(event.target.value)
              }}
            />
          </div>
          <div>
            <label htmlFor="todo">Todo</label>
            <input 
              type="text"
              value={todo}
              onChange={event => {
                setTodo(event.target.value)
              }}
            />
          </div>
          <div>
            <label htmlFor="Priority">Priority</label>
            <select 
              name="priority"
              id="priority"
              value={priority}
              onChange={event => {
                setPriority(event.target.value)
              }}
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
          <div>
            <button type="submit">Add Todo</button>
            {props.loading && <LoadingIndicator/>}
            {props.added && <ActionMessage delay="5000" message="Todo Added"/>}
            {props.deleted && <ActionMessage delay="5000" message="Todo Deleted"/>}
          </div>
        </form>
      </Card>
    </section>
  )
})

export default TodoListForm