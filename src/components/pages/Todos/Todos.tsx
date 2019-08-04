import * as React from "react";
import DefaultTemplate from "~/src/components/templates/DefaultTemplate";

interface Props {
  todos: string[];
  add: (text: string) => void;
  remove: (index: number) => void;
}

const Todos: React.FC<Props> = props => {
  const textInput = React.createRef<HTMLInputElement>();
  return (
    <DefaultTemplate>
      <h1>Todos</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.add(textInput.current.value);
          textInput.current.value = null;
        }}
      >
        <input type="text" name="text" ref={textInput} />
        <input type="submit" value="add" />
      </form>
      <div>
        {props.todos.map((todo, index) => (
          <div key={index}>
            {todo}
            <button
              onClick={e => {
                e.preventDefault();
                props.remove(index);
              }}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </DefaultTemplate>
  );
};

export default Todos;
