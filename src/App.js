import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store';
import { TodoListStore } from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <TodoListStore/>
    </Provider>
  );
}

export default App;

// subscribe : écoute les changements au niveau du store
// getState : récupère l'état
//store.subscribe(() => console.log(store.getState()));

// envoie une action particulière
//store.dispatch({type: ADD_TODO_ACTION, payload: {title: 'Démo'}});
