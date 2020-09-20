import { ADD_ENENT,AllEventState, EventAddActionTypes } from "./types";
const initialState: AllEventState = {
  events: []
};

export function eventAddReducer(
  state = initialState,
  action: EventAddActionTypes
): AllEventState {
  switch (action.type) {
    case ADD_ENENT:
          console.log('CASE>',action.payload)
          console.log('CASE>>',state)
          return {
            events: [...state.events, action.payload]
          };
    default:
      return state;
  }
}
