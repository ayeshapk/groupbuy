// Describing the shape of the system's slice of state

export interface WindowState{
  windowWidth: number;
  windowHeight: number;
}

// Describing the different ACTION NAMES available

export const SET_WINDOW_SIZE = "SET_WINDOW_SIZE";

interface SetWindowAction {
  type: typeof SET_WINDOW_SIZE;
  payload: WindowState;
}


export type GlobalActionTypes =  SetWindowAction ;
