import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteTodo, removeTodo } from '../../features/TodoSlice';

export const TodoItem = ({ id: todoId, title, completed }) => {
  const dispatch = useDispatch();
  const handleToggleTodo = (e, id) => {
    e.preventDefault();
    dispatch(toggleCompleteTodo(id));
  };
  const handleRemoveTodo = (e, id) => {
      e.preventDefault()
      dispatch(removeTodo(id))
  }

  return (
    <div className="todo__item">
      <button type="submit" className="todo__form_btn" onClick={(e) => handleToggleTodo(e, todoId)}>
        Complete
      </button>
      <li style={{color: completed? "green" : "black"}}>{title}</li>
      <button type="submit" className="todo__form_btn" onClick={(e) => handleRemoveTodo(e,todoId)}>
        Delete
      </button>
    </div>
  );
};
