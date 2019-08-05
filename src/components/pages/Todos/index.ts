import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "~/src/modules/store";
import { TodosActions } from "~/src/modules/Todos";
import { add, remove } from "~/src/modules/Todos/actions";
import Todos from "./Todos";

const mapStateToPorps = (state: AppState) => {
  return {
    todos: state.TodosState.todos
  };
};

const mapDispatchToProps = (dispatch: Dispatch<TodosActions>) => {
  return {
    add: (text: string) => {
      dispatch(add(text));
    },
    remove: (index: number) => {
      dispatch(remove(index));
    }
  };
};

export default connect(
  mapStateToPorps,
  mapDispatchToProps
)(Todos);
