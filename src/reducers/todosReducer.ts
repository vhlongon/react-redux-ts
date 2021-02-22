import { Todo, ActionTypes, Action } from '../actions/actions';

const initialState: Todo[] = [];

export const todosReducer = (state: Todo[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS: {
      return action.payload;
    }
    case ActionTypes.DELETE_TODO: {
      return state.filter(({ id }) => id !== action.payload);
    }
    default: {
      return state;
    }
  }
};
