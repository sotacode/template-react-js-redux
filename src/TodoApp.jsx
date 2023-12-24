import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {
  /* const {data: todos = [], isLoading} = useGetTodosQuery() */
  const [numberTodo, setNumberTodo] = useState(1)
  const {data: todo , isLoading} = useGetTodoByIdQuery(numberTodo)

  const nextTodo = () => {
    setNumberTodo(numberTodo + 1)
  }

  const prevTodo = () => {
    setNumberTodo(numberTodo - 1)
  }

  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading: { isLoading ? 'True' : 'False' }</h4>
        <pre>...</pre>
        
        <h4>Todo: { todo?.title }</h4>

        <button onClick={prevTodo}>
            Prev Todo
        </button>
        <button onClick={nextTodo}>
            Next Todo
        </button>

        {/* <ul className=''>
          {todos.map(todo => (
            <li key={todo.id}>
              <strong>{ todo.completed ? 'DONE' : 'Pending'}</strong>
              {todo.title}
            </li>
          ))}
        </ul> */}
    </>
  )
}
