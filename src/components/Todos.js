import React, { useState, useEffect, useMemo, useCallback } from 'react'

import TodoList from './TodoList'
import TodoForm from './TodoForm'
import Search from './Search'

const Todos = () => {
  const [userTodos, setUserTodos] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [added, setAdded] = useState(false)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    fetch('https://todo-list-gatsby-default-rtdb.europe-west1.firebasedatabase.app/todos.json')
    .then(response => response.json())
    .then(responseData => {
      const loadedTodos = []
      for (const key in responseData) {
        loadedTodos.push({
          id: key,
          name: responseData[key].name,
          todo: responseData[key].todo,
          priority: responseData[key].priority
        })
      }
      setUserTodos(loadedTodos)
    })
  }, [])

  const addTodoHandler = (todo) => {
    setIsLoading(true)
    const url = 'https://todo-list-gatsby-default-rtdb.europe-west1.firebasedatabase.app/todos.json'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json'}
    }).then(response => {
      return response.json()
    }).then(responseData => {
      setUserTodos(prevTodos => [
        ...prevTodos,
        {id: responseData.name, ...todo }
      ])
      setIsLoading(false)
      setAdded(true)
      setDeleted(false)
    })
  }

  const removeTodoHandler = useCallback(todoId => {
    fetch(`https://todo-list-gatsby-default-rtdb.europe-west1.firebasedatabase.app/todos/${todoId}.json`, {
      method: 'DELETE'
    }).then(response => {
      return response.json()
    }).then(responseData => {
      setUserTodos(prevTodos => prevTodos.filter(todo =>
        todo.id !== todoId
      ))
    })
    setAdded(false)
    setDeleted(true)
  }, [])

  const filteredTodosHandler = useCallback(filteredTodos => {
    setUserTodos(filteredTodos)
  }, [])

  const todoList = useMemo(() => {
    return (
      <TodoList
        todos={userTodos}
        onRemoveTodo={removeTodoHandler}  
      />
    )
  }, [userTodos, removeTodoHandler])
 

  return (
    <div>

      <TodoForm
        onAddTodo={addTodoHandler}
        loading={isLoading}
        added={added}
        deleted={deleted}
      />

      <section>
        <Search onLoadTodos={filteredTodosHandler}/>
        {todoList}
      </section>
    </div>
  )
}

export default Todos