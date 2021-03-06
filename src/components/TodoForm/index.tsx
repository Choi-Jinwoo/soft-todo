import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

import "./index.css";

type Props = {
  createTodo: (todo: string) => void;
};

const TodoForm = ({ createTodo }: Props) => {
  const [todo, setTodo] = useState("");

  const onTodoChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodo(e.target.value);
  };

  const onKeyPress: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      createTodo(todo);
      setTodo("");
    }
  };

  return (
    <div className="todo-form">
      <h1 className="todo-form__title">새로운 할 일 생성</h1>
      <input
        value={todo}
        onChange={onTodoChange}
        onKeyPress={onKeyPress}
        type="text"
        id="todo-input"
        className="todo-form__input todo-form__input--create"
        placeholder="새로운 할 일을 작성해보세요!"
      />
    </div>
  );
};

export default TodoForm;
