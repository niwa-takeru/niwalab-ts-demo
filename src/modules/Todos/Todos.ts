import { Action, Reducer } from "redux";

// Actions
enum TodosActionTypes {
  ADD = "niwalab-ts-demo/Todos/ADD",
  REMOVE = "niwalab-ts-demo/Todos/REMOVE"
}

interface AddAction extends Action {
  type: typeof TodosActionTypes.ADD;
  payload: {
    text: string;
  };
}

interface RemoveAction extends Action {
  type: typeof TodosActionTypes.REMOVE;
  payload: {
    index: number;
  };
}

export type TodosActions = AddAction | RemoveAction;

// Action Creators
export const add = (text: string): AddAction => ({
  type: TodosActionTypes.ADD,
  payload: {
    text: text
  }
});

export const remove = (index: number): RemoveAction => ({
  type: TodosActionTypes.REMOVE,
  payload: {
    index: index
  }
});

// State
export interface TodosState {
  todos: string[];
}

const initialState: TodosState = {
  todos: ["<sample> todo"]
};

// Reducer
const reducer: Reducer<TodosState, TodosActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TodosActionTypes.ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload.text]
      };
    case TodosActionTypes.REMOVE:
      return {
        ...state,
        todos: state.todos.filter((_, index) => index != action.payload.index)
      };
    default:
      const _: never = action;
      return state;
  }
};

export default reducer;
