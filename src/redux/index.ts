import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { testDuck } from "./test/reducers";
import { globalReducer } from "./global/reducers";
import { todoReducer } from "./todo/reducers";
import { hookEventReducer } from "./hookTest/reducers";
import { eventReducer } from "./event/reducers";
const rootReducer = combineReducers({
  testDuck: testDuck,
  globalReducer:globalReducer,
  todos:todoReducer,
  hookEvents:hookEventReducer,
  events: eventReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
