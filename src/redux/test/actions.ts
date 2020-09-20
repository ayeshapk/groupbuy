import { TestDuckState, UPDATE_SOMETHING, SEND_SOMETHING } from "./types";

export function updateSomething(newState: TestDuckState) {
  return {
    type: UPDATE_SOMETHING,
    payload: newState
  };
}

export function sendSomething(message: string) {
    return {
      type: SEND_SOMETHING,
      payload: {
        message: message
      }
    };
  }
