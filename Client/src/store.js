import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  Framework7StateKernel,
  framework7Reducer,
  syncFramework7WithStore,
} from "framework7-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import CategoryReducer from "./Reducers/CategoryReducer";
export const stateKernel = new Framework7StateKernel();

export const store = createStore(
  combineReducers({
    framework7: framework7Reducer,
    Lists: CategoryReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

syncFramework7WithStore(store, stateKernel);
