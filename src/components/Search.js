import React, { useState, useEffect } from 'react'

import Card from '../UI/Card'

const Search = React.memo(props => {
  const { onLoadTodos } = props
  const [nameFilter, setTitleFilter] = useState('') 

  useEffect(() => {
    const query = nameFilter.length === 0 ? '' : `?orderBy="name"&equalTo="${nameFilter}"` 
    fetch('https://todo-list-gatsby-default-rtdb.europe-west1.firebasedatabase.app/todos.json' + query)
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
      onLoadTodos(loadedTodos)
    })
  }, [nameFilter, onLoadTodos])

  return (
    <section>
      <Card>
        <div>
          <label htmlFor="filter-by-title">Filter by Title</label>
          <input type="text" value={nameFilter} onChange={event => setTitleFilter(event.target.value)}/>
        </div>
      </Card>
    </section>
  )
})

export default Search