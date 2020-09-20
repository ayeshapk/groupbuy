// Describing the shape of the system's slice of state


export interface Event {
  id: string|number;
  title: string;
  description: string;
}


export interface EventState {
  events: Event[];
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
  body: {
    data: Event[],
    success: boolean,
    errror: {
      message: string
    }
  };
}


// Describing the different ACTION NAMES available

export const ADD_EVENT = "ADD_EVENT";
export const FETCH_EVENT_SUCCESS = "FETCH_EVENT_SUCCESS";
export const UNFETCH_EVENT_SUCCESS = 'UNFETCH_EVENT_SUCCESS';

interface AddEventAction {
  type: typeof ADD_EVENT;
  payload: Event;
}

interface FetchEventAction {
  type: typeof FETCH_EVENT_SUCCESS;
  payload: EventState;
}

interface UnFetchEventAction {
  type: typeof UNFETCH_EVENT_SUCCESS;
  payload: EventState;
}



export type EventActionTypes = AddEventAction | FetchEventAction | UnFetchEventAction;
