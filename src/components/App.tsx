import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, fetchTodos } from '../actions/actions';
import { StoreState } from '../reducers/rootReducer';

const App = (): JSX.Element => {
  const todos = useSelector(({ todos }: StoreState) => todos);
  const dispatch = useDispatch();

  const handleClick = (id: number) => (): void => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map(({ id, title, completed }) => (
          <li key={id}>
            {title} {completed && ' - completed'}
            <button onClick={handleClick(id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
