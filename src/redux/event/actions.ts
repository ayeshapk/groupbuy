import {
  ADD_EVENT,
  FETCH_EVENT_SUCCESS,
  UNFETCH_EVENT_SUCCESS,  Res, Event
} from "./types";
import request from "superagent";
import { WEDDING_API_URL, PROXY_URL } from "../../consts/const"
import { ErrorMessage, ResponseMessage } from "../../interface/globalInterface";


function addEventSuccess(fromdata: Event) {
  return {
    type: ADD_EVENT,
    payload: fromdata,
  }
}

export function addEvent(fromdata: Event) {
  return (dispatch: (arg0: any) => void) => {
    dispatch(addEventSuccess(fromdata));
  }
}

function fetchEventSuccess(event: Event[]) {
  return {
    type: FETCH_EVENT_SUCCESS,
    payload: event,
  }
}

export function fetchEvent() {
  return (dispatch: (arg0: any) => void) => {
    request.get(PROXY_URL + WEDDING_API_URL + 'events')
      .set({})
      .end((err: ErrorMessage, res: ResponseMessage<Event[]>) => {
        if (err) {
          console.log('ERROR', err)
          console.log('ERROR', err.response)
        } else {
          let event = (JSON.parse(res.text));
          console.log('hello',res)
          dispatch(fetchEventSuccess(event.data))
        }
      })
  }
}

export function unfetchEvent() {
  let unfetch: Event = {
    id: '1',
    title: "UNFETCH",
    description: "UNFETCH"
  }
  return {
    type: UNFETCH_EVENT_SUCCESS,
    payload: unfetch,
  }
}
