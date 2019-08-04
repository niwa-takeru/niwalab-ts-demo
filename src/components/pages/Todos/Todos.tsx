import * as React from "react";
import DefaultTemplate from "~/src/components/templates/DefaultTemplate";

interface TodosProps {
  todos: string[];
  add: (text: string) => void;
  remove: (index: number) => void;
}

const Todos: React.FC<TodosProps> = props => {
  const textInput = React.createRef<HTMLInputElement>();
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    props.add(textInput.current.value);
    textInput.current.value = null;
  };
  return (
    <DefaultTemplate>
      <h1>Todos</h1>
      <form onSubmit={handleAdd}>
        <input type="text" name="text" ref={textInput} />
        <input type="submit" value="add" />
      </form>
      <div>
        {props.todos.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} remove={props.remove} />
        ))}
      </div>
    </DefaultTemplate>
  );
};

interface TodoProps {
  todo: string;
  index: number;
  remove: (index: number) => void;
}

const Todo: React.FC<TodoProps> = props => {
  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    props.remove(props.index);
  };
  return (
    <div>
      <button onClick={handleRemove}>remove</button>
      {props.todo}
    </div>
  );
};

export default Todos;
