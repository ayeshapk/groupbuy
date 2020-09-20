// Describing the shape of the system's slice of state


export interface MessageInput{
  ID: string;
  Title: string;
  Description: string;
}

export interface AllEventState {
  events: MessageInput[];
}

// Describing the different ACTION NAMES available

export const ADD_ENENT = "ADD_ENENT";


interface AddEventAction {
  type: typeof ADD_ENENT;
  payload: MessageInput;
}

export type EventAddActionTypes =  AddEventAction ;
