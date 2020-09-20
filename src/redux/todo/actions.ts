import {
  ADD_TODO_SUCCESS,
  FETCH_TODOS_SUCCESS,
  UNFETCH_TODOS_SUCCESS,
  Todo,
  TodoAdd} from "./types";
import request from "superagent";
import { WEDDING_API_URL, PROXY_URL } from "../../consts/const"
import { ErrorMessage, ResponseMessage, AddDataResponseMessage } from "../../interface/globalInterface";



function addTodoSuccess(fromdata: Todo) {
  console.log('sent this to server',fromdata)
  return {
    type: ADD_TODO_SUCCESS,
    payload: fromdata,
  }
}


function fetchTodoSuccess(todo: Todo[]) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todo,
  }
}


export function addTodo(formData:TodoAdd) {
  //let token = localStorage.getItem('id_token') || null;
  console.log('addTODO function',formData)
  return (dispatch: (arg0: { type: string; payload: Todo; }) => void) => {
      request.post(PROXY_URL+WEDDING_API_URL + 'todos')
          //.set({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': token})
          .send({...formData,})
          .end((err: ErrorMessage, res: any) => {
              if (err) {
                 console.log(err)
              } else {
                console.log('res',res)
                console.log('resreq',res.req)
                console.log(' res.body.data', res.body.data)
                console.log('res data',res.req._data)
                //let todo = (JSON.parse(res.text));
                  //dispatch(addTodoSuccess(todo));
              }
          })
  }

}

export function fetchTodos() {
  return (dispatch: (arg0: any) => void) => {
    request.get(PROXY_URL+WEDDING_API_URL + 'todos')
      .set({})
      //.end((err: { status: any; message: any; response: { body: { messages: any; message: any; }; }; }, res: { text: string;body:{data:Todo[],success:boolean,errror:{message:string}};}) => {
      .end((err: ErrorMessage, res: ResponseMessage<Todo[]>) => {
        if (err) {
          console.log('ERROR', err)
          console.log('ERROR', err.response)
        } else {
          let todos = res.body.data;
       
          dispatch(fetchTodoSuccess(todos));
        }
      })
  }
}

export function unfetchTodos() {
  let unfetch:Todo = { 
    id: 1, 
    title: "N/A", 
    description: "N/A", 
    dueDate: "0001-01-01T00:00:00Z", 
    user: 0 
  }
  return {
    type: UNFETCH_TODOS_SUCCESS,
    payload: unfetch,
  }
}
