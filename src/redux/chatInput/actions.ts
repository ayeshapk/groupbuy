import { PLAY_MESSAGE, DELETE_MESSAGE,MessageInput } from "./types";

export function playMessage(newMessage: MessageInput) {
  return {
    type: PLAY_MESSAGE,
    payload: newMessage
  };
}

export function deleteMessage(timestamp: number) {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  };
}