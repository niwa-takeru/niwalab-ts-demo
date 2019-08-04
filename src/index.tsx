import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./modules/store"
import Todos from "~/src/components/pages/Todos"

ReactDOM.render(
  <Provider store={store}>
    <Todos />
  </Provider>
  ,
  document.getElementById("root")
)
