// Describing the shape of the system's slice of state
export interface Todo{
  id:number,
  title:string,
  description:string,
  dueDate:string,
  user:number
}

export interface TodoAdd{
  id?:number,
  title:string,
  description:string,
  dueDate:string,
  user?:number
}

export interface TodoState {
  todos: Todo[];
}

export interface Err { 
  status: any; 
  message: any; 
  response: { 
    body: { 
      messages: any; 
      message: any; 
    }; 
  }; 
}
export interface Res { 
  text: string;
  body:{
    data:Todo[],
    success:boolean,
    errror:{message:string
    }
  };
}


// Describing the different ACTION NAMES available

export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const FETCH_TODOS_SUCCESS = "FETCH_TODO_SUCCESS";
export const UNFETCH_TODOS_SUCCESS = 'UNFETCH_TODO_SUCCESS';



interface AddTodoAction {
  type: typeof ADD_TODO_SUCCESS;
  payload: Todo;
}

interface FetchTodoAction {
  type: typeof FETCH_TODOS_SUCCESS;
  payload: TodoState;
}


interface UnFetchTodoAction {
  type: typeof UNFETCH_TODOS_SUCCESS;
  payload: TodoState;
}



export type EventActionTypes =  AddTodoAction | FetchTodoAction | UnFetchTodoAction  ;
