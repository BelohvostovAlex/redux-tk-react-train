import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo } from '../../features/TodoSlice'
import { v4 } from 'uuid';
import { TodoItem } from './TodoItem';

export const TodoForm = () => {
  const dispatch = useDispatch()
  const [todoName, setTodoName] = React.useState('')
  const {todos} = useSelector(state => state.todos)

  const handleAddTodo = (e) => {
    e.preventDefault()
    dispatch(createTodo({
      id: v4(),
      title: todoName,
      completed: false
    }))
    setTodoName('')
  }
  
  return (
    <form className='todo__form'>
        <h1 className='todo__form_title'>Redux Toolkit Todo App</h1>
        <div className="todo__form_block">
            <input type="text" className='todo__form_input' value={todoName} onChange={(e) => setTodoName(e.target.value)}/>
            <button type='submit' className='todo__form_btn' onClick={(e) => handleAddTodo(e)}>Submit</button>
        </div>
        <div className="todo__form_footer">
            <ul>
              {todos?.map(todo => <TodoItem key={todo.id} {...todo}/>)}
            </ul>
        </div>
    </form>
  )
}
