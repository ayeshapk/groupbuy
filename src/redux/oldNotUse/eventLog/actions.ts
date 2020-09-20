import {
  FETCH_ENENT_SUCCESS,
} from "./types";
import request from "superagent";
const EVENT_FETCH_SITE_PATH = 'http://test.weddingpencil.com/events';
export const proxyurl = "https://cors-anywhere.herokuapp.com/";
const eventUrl = EVENT_FETCH_SITE_PATH;

function fetchEventSuccess(newMessage: any) {
  console.log(newMessage)
  return {
      type: FETCH_ENENT_SUCCESS,
      payload: newMessage,
  }
}

export function fetchEvent() {
  return (dispatch: (arg0: any) => void) => {
    request.get(proxyurl + eventUrl)
        .set({})
        .end((err: { status: any; message: any; response: { body: { messages: any; message: any; }; }; }, res: { text: string; }) => {
            if (err) {
               console.log('ERROR',err)
            } else {
                let event = (JSON.parse(res.text));
                //console.log('JSON event',event)
                dispatch(fetchEventSuccess(event))
            }
        })
}
}
