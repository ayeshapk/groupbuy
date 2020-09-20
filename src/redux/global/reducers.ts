import { 
  SET_WINDOW_SIZE,
  GlobalActionTypes,
  WindowState
} from "./types";

const initialState: WindowState = {
  windowWidth: 1920,
  windowHeight:1080,
};

export function globalReducer(
  state = initialState,
  action: GlobalActionTypes
): WindowState {
  switch (action.type) {
      case SET_WINDOW_SIZE:
          return {
            ...state,
            ...action.payload,
          };
      default:
          return state
  }
}
