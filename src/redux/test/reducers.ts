import { UPDATE_SOMETHING, SEND_SOMETHING, TestDuckState, TestActionTypes } from "./types";

const initialState: TestDuckState = {
  message: "initial",
  username: ""
};

export function testDuck(
  state = initialState,
  action: TestActionTypes
): TestDuckState {
  switch (action.type) {
    case UPDATE_SOMETHING:
      return {
        ...state,
        ...action.payload
      };

    case SEND_SOMETHING:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
