import { Action } from "redux";

// Actions
export enum ActionType {
  ADD = "niwalab-ts-demo/Todos/ADD",
  REMOVE = "niwalab-ts-demo/Todos/REMOVE"
}

interface AddAction extends Action {
  type: ActionType.ADD;
  payload: {
    text: string;
  };
}

interface RemoveAction extends Action {
  type: ActionType.REMOVE;
  payload: {
    index: number;
  };
}

// Action Creators
export const add = (text: string): AddAction => ({
  type: ActionType.ADD,
  payload: {
    text
  }
});

export const remove = (index: number): RemoveAction => ({
  type: ActionType.REMOVE,
  payload: {
    index
  }
});

export type Actions = AddAction | RemoveAction;
