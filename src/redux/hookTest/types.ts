// Describing the shape of the system's slice of state

export interface Event {
  id: string;
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

export const FETCH_EVENT_SUCCESS = "FETCH_EVENT_SUCCESS";

interface FetchEventAction {
  type: typeof FETCH_EVENT_SUCCESS;
  payload: EventState;
}


export type HookActionTypes =  FetchEventAction ;
