import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const store = createStore(
  // typeof window === "object" &&
  // typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
  //   ? window.__REDUX_DEVTOOLS_EXTENSION__()
  //     : (f) => f,
  reducers,
  compose(applyMiddleware(thunk))
);

export default store;
