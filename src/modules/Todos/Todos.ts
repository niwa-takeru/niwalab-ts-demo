import { Action } from "redux"

// Actions
enum ActionType {

}

export type TodosActions = Action

// Action Creators



// State
export type TodosState = {
  todos: string[];
}

const initialState: TodosState = {
  todos: ["test todo1", "test todo2", "test todo3", "test todo4",]
}

// Reducer
const reducer = (state: TodosState = initialState, action: Action) => {
  switch (action.type) {

    default:
      // const _: never = action;
      return state
  }
}

export default reducer
