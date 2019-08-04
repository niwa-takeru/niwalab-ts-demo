import * as React from "react";
import DefaultTemplate from "~/src/components/templates/DefaultTemplate";

interface Props {
  todos: string[];
}

const Todos: React.FC<Props> = props => {
  return (
    <DefaultTemplate>
      <h1>Todos</h1>
      <div>
        {props.todos.map((todo, index) => (
          <div key={index}> {todo} </div>
        ))}
      </div>
    </DefaultTemplate>
  );
};

export default Todos;
