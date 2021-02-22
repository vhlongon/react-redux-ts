import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, fetchTodos } from '../actions/actions';
import { StoreState } from '../reducers/rootReducer';

const App = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const todos = useSelector(({ todos }: StoreState) => todos);
  const dispatch = useDispatch();

  const handleClick = (id: number) => (): void => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    dispatch(fetchTodos());
    setLoading(true);
  }, [dispatch]);

  useEffect(() => {
    if (todos.length) {
      setLoading(false);
    }
  }, [todos]);

  return (
    <div>
      <h1>Todos</h1>
      {loading && <div>Loading...</div>}
      <ul>
        {todos.map(({ id, title, completed }) => (
          <li key={id}>
            <button onClick={handleClick(id)}>delete </button>
            {title} {completed && ' - completed'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
