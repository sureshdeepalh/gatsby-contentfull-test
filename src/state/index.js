import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";

import todo from "./reducers/todo"
const rootReducers = combineReducers({
  todo,
})

const store = ()=>createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
)
export default store
