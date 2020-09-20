// Describing the shape of the system's slice of state
export interface TestDuckState {
  message: string;
  username: string;
}

// Describing the different ACTION NAMES available
export const UPDATE_SOMETHING = "UPDATE_SESSION";
export const SEND_SOMETHING = "SEND_SOMETHING";

interface UpdateSomethingAction {
  type: typeof UPDATE_SOMETHING;
  payload: TestDuckState;
}

interface SendSomethingAction {
  type: typeof SEND_SOMETHING;
  payload: {message: string};
}

export type TestActionTypes = UpdateSomethingAction | SendSomethingAction;
