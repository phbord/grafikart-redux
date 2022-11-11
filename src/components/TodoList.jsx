import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_TODO_ACTION } from "../store/todosReducer";
import { todosSelector } from "../store/todosSelectors";
import { deleteTodoAction, toggleTodoAction } from "../store/todosActions";

function TodoItem({todo, onToggle, onDelete}) {
  return <li>
    <label htmlFor="">
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)}/>
      {todo.title}
      <button onClick={() => onDelete(todo)}>x</button>
    </label>
  </li>
};

// composant à décorer
export function TodoList({todos, onToggle, onDelete}) {
  return <ul>
    {
      todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id}/>)
    }
  </ul>;
};

// utilise les todos du store, puis les passe dans le composant TodoList
export function TodoListStore() {
  const todos = useSelector(todosSelector); //useSelector: récupérer le contenu du store
  const dispatch = useDispatch(); //useDispatch: envoyer des actions
  const onToggle = useCallback(todo => {
    dispatch(toggleTodoAction(todo));
  });
  const onDelete = useCallback(todo => {
    dispatch(deleteTodoAction(todo));
  });
  return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete}/>
};