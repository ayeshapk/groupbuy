import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { eventLogReducer } from "./eventLog/reducers";
import { eventAddReducer } from "./eventAdd/reducers";
const rootReducer = combineReducers({
  eventAdd: eventAddReducer,
  eventLog: eventLogReducer,
});

export type EventStoreState = ReturnType<typeof rootReducer>;

export default function configureEventStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}