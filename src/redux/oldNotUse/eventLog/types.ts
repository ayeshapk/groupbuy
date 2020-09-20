// Describing the shape of the system's slice of state

export interface EventLogState{
  ID: string;
  Title: string;
  Description: string;
}

// Describing the different ACTION NAMES available

export const FETCH_ENENT_SUCCESS = "FETCH_ENENT_SUCCESS";

interface FetchEventAction {
  type: typeof FETCH_ENENT_SUCCESS;
  payload: EventLogState;
}

export type EventActionTypes =  FetchEventAction;
