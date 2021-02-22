import { FetchTodosAction, DeleteTodoAction } from './todosAction';

export enum ActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  DELETE_TODO = 'DELETE_TODO',
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type Action = FetchTodosAction | DeleteTodoAction;
