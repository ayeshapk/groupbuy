import {
  ADD_EVENT,
  FETCH_EVENT_SUCCESS,
  UNFETCH_EVENT_SUCCESS,
  EventActionTypes,
  EventState
} from "./types";


const initialState: EventState = {
  events: [
    {
      id: '1',
      description: 'N/A',
      title: 'N/A'
    }
  ]
};

export function eventReducer(
  state = initialState,
  action: EventActionTypes
): EventState {
  switch (action.type) {
    case FETCH_EVENT_SUCCESS:
      let eventsFetch = [].concat(action.payload)
      return {
        ...state,
        ...action.payload,
        events: eventsFetch,
      };
    case UNFETCH_EVENT_SUCCESS:
      let eventsUnFetch = [].concat(action.payload)
      return {
        ...state,
        ...action.payload,
        events: eventsUnFetch,
      };
    case ADD_EVENT:
      let eventsAdd = [].concat(state.events);
      eventsAdd.push(action.payload);
      return {
        ...state,
        ...action.payload,
        events: eventsAdd
      };
    default:
      return state;
  }
}
