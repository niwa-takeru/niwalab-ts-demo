import { connect } from "react-redux"
import { AppState } from "~/src/modules/store"
import Todos from './Todos'

const mapStateToPorps = (state: AppState) => {
  return {
    todos: state.Todos.todos
  }
}

export default connect(mapStateToPorps)(Todos)
