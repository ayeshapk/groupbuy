import { FETCH_ENENT_SUCCESS, EventLogState, EventActionTypes } from "./types";
const initialState: EventLogState = {
  ID: '',
  Title: '',
  Description: '',
};

export function eventLogReducer(
  state = initialState,
  action: EventActionTypes
): EventLogState {
  switch (action.type) {
    case FETCH_ENENT_SUCCESS:
        return {
          ...state,
          ...action.payload
        };
    default:
      return state;
  }
}
