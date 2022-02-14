import React from 'react'

export const TodoForm = () => {
  return (
    <form className='todo__form'>
        <h1 className='todo__form_title'>Redux Toolkit Todo App</h1>
        <div className="todo__form_block">
            <input type="text" className='todo__form_input'/>
            <button type='submit' className='todo__form_btn'>Submit</button>
        </div>
        <div className="todo__form_footer">
            <button type='submit' className='todo__form_btn'>Complete</button>
            <p>Text</p>
            <button type='submit' className='todo__form_btn'>Delete</button>
        </div>
    </form>
  )
}
