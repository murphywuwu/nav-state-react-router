import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import reducer from "../reducers";

const history = createBrowserHistory();
// the reducer will keep track of the router state
const store = createStore(
  connectRouter(history)(reducer),
  applyMiddleware(routerMiddleware(history))
);

// window.store = store;
export default store;

