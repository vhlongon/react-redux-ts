import { Todo } from '../actions/actions';
import { todosReducer } from './todosReducer';
import { combineReducers } from 'redux';

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
