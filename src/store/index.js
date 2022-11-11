import {createStore, combineReducers} from 'redux';
import { TodosReducer } from './todosReducer';

//store redux utilisable
export default createStore(
  combineReducers({
    todos: TodosReducer,
    filter: (state=0, action) => state
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);