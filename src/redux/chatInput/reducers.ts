import {
  PLAY_MESSAGE,
  DELETE_MESSAGE,
  ChatActionTypes,
  PlayGroundState
} from "./types";

const playgroundState: PlayGroundState = {
  messages: []
};

export function chatReducer(
  state = playgroundState,
  action: ChatActionTypes
): PlayGroundState {
  switch (action.type) {
    case PLAY_MESSAGE:
      return {
        messages: [...state.messages, action.payload]
      };
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          message => message.timestamp !== action.meta.timestamp
        )
      };
    default:
      return state;
  }
}