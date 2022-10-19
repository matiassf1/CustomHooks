import { useEffect, useReducer } from 'react';
import {todoReducer} from '../08-useReducer/todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  }

export const useTodo = (initialState = []) => {
    const [todos, dispatch] = useReducer( todoReducer, initialState, init );
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  

  const handleNewTodo = (todo) => {
    dispatch({
      type: '[TODO] Add Todo',
      payload: todo
    });
  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Delete Todo',
      payload: id
    });
  }

  const handleModifyTodo = (id) => {
    dispatch({
      type: '[TODO] Modify Todo',
      payload: id
    });
  }

  return {
        todos,
        handleDeleteTodo,
        handleModifyTodo,
        handleNewTodo,
        pendingTodoCount: todos.filter( (todo) => todo.done === false ).length,
        todoCount: todos.length
    }
}

