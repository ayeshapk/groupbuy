import { UPDATE_SESSION, InputTextState, SystemActionTypes } from "./types";

const initialState: InputTextState = {
  loggedIn: false,
  session: "",
  userName: "",
  text:'',
  data:'',
  time:new Date().getTime(),
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): InputTextState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}