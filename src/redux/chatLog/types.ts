
// Describing the shape of the system's slice of state
export interface InputTextState {
  loggedIn: boolean;
  session: string;
  userName: string;
  data:string;
  text:string;
  time:any;
}

// Describing the different ACTION NAMES available
export const UPDATE_SESSION = "UPDATE_SESSION";

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION;
  payload: InputTextState;
}

export type SystemActionTypes = UpdateSessionAction;
