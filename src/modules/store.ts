import { createStore, combineReducers } from "redux"
import Todos, { TodosActions } from "./Todos/Todos"

const reducer = combineReducers({
  Todos
})

const store = createStore(reducer)

export default store

export type AppActions = TodosActions
export type AppState = ReturnType<typeof store.getState>

