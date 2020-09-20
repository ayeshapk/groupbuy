import {
  ADD_ENENT,
} from "./types";

function addEventSuccess(fromdata: { ID: string; Title: string; Description: string; }) {
  console.log('fromdata->>>>',fromdata)
  return {
      type: ADD_ENENT,
      payload: fromdata,
  }
}

export function addEvent(fromdata: { ID: string; Title: string; Description: string; }) {
  console.log('checkADD',fromdata)
  return (dispatch: (arg0: any) => void) => {
  dispatch(addEventSuccess(fromdata));
  }
}