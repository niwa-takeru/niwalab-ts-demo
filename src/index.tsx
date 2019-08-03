import * as React from "react"
import * as ReactDom from "react-dom"

interface HelloProps { compiler: string; framework: string }

const HelloComponent = (props: HelloProps) =>
  <h1>Hello from {props.compiler} and {props.framework} !!</h1>;

ReactDom.render(
  <HelloComponent compiler="TypeScript" framework="React" />,
  document.getElementById("body")
)
