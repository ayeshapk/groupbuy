import { InputTextState, UPDATE_SESSION } from "./types";

export function updateSession(newSession: InputTextState) {
  return {
    type: UPDATE_SESSION,
    payload: newSession
  };
}