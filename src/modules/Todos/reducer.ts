import { Reducer } from "redux";
import { Actions, ActionType } from "./actions";

// State
export interface State {
  todos: string[];
}

const initialState: State = {
  todos: ["<sample> todo"]
};

// Reducer
const reducer: Reducer<State, Actions> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload.text]
      };
    case ActionType.REMOVE:
      return {
        ...state,
        todos: state.todos.filter(
          (todo, index) => index !== action.payload.index
        )
      };
    default:
      const _: never = action;
      return state;
  }
};

export default reducer;
