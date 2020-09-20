import {
  EventActionTypes,
  TodoState,
  UNFETCH_TODOS_SUCCESS,
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
} from "./types";

import {CurrentTime} from "../../consts/const"

export const initialState: TodoState = {
  todos: [
    {
      id: 1,
      title: "N/A",
      description: "N/A",
      dueDate: CurrentTime,
      user: 0
    }
  ],
};

export function todoReducer(
  state = initialState,
  action: EventActionTypes
): TodoState {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      let todosFetch = [].concat(action.payload)
      return {
        ...state,
        todos: todosFetch,
      };
    case UNFETCH_TODOS_SUCCESS:
      let todosUnFetch = [].concat(action.payload)
      return {
        ...state,
        ...action.payload,
        todos: todosUnFetch,
      };
    case ADD_TODO_SUCCESS:
      let todoAdd = [].concat(state.todos);
      console.log('REDUCER ADD_TODO_SUCCESS',todoAdd)
      todoAdd.push(action.payload);
      return {
        ...state,
        ...action.payload,
        todos: todoAdd,
      };
    default:
      return state
  }
}
