import { 
  FETCH_EVENT_SUCCESS,
  HookActionTypes,
  EventState
} from "./types";

export const initialState: EventState = {
  events: [
    {
      id: '1',
      description: 'N/A',
      title: 'N/A'
    }
  ]
};



export function hookEventReducer(
  state = initialState,
  action: HookActionTypes
): EventState {
  switch (action.type) {
    case FETCH_EVENT_SUCCESS:
      let eventsFetch = [].concat(action.payload)
      return {
        ...state,
        ...action.payload,
        events: eventsFetch,
      };
      default:
          return state
  }
}
