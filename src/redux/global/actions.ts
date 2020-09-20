import { 
  SET_WINDOW_SIZE,
  WindowState
} from "./types";

/*********** ACTIONS ***********/
export function setWindowSize (screen: WindowState){
    return {
        type: SET_WINDOW_SIZE,
        payload: screen
    }
}

