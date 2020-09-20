import { 
  FETCH_EVENT_SUCCESS,
  Res, Event
} from "./types";
import useSWR from "swr";
import { WEDDING_API_URL, PROXY_URL, fetcher } from "../../consts/const";

/*********** ACTIONS ***********/
function fetchEventSuccess(event: Event[]) {
  return {
    type: FETCH_EVENT_SUCCESS,
    payload: event,
  }
}

export function fetchEvent() {
  const { data: events, error } = useSWR(
    PROXY_URL + WEDDING_API_URL + 'events',
    fetcher
  );
  if (error) {
    console.log('ERROR', error)
  } else {
    console.log('SWR events',events)
    fetchEventSuccess(events)
  }
}