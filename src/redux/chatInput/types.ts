// Describing the shape of the chat's slice of state

export interface MessageInput{
  user: string;
  message: string;
  timestamp: any;
  data:string;
  text: string;
}

export interface PlayGroundState {
  messages: MessageInput[];
}

// Describing the different ACTION NAMES available
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const PLAY_MESSAGE = "PLAY_MESSAGE";

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}

interface PlayMessageAction {
  type: typeof PLAY_MESSAGE;
  payload: MessageInput;
}

export type ChatActionTypes = PlayMessageAction | DeleteMessageAction ;