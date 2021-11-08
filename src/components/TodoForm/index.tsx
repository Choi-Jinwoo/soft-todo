import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import Todo from "../../domain/Todo";

import "./index.css";

type Props = {
  createTodo: (todo: Todo) => void;
};

const TodoForm = ({ createTodo }: Props) => {
  const [content, setContent] = useState("");

  const onTodoChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setContent(e.target.value);
  };

  const onKeyPress: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      createTodo(
        new Todo({
          content,
          date: null,
        })
      );
      setContent("");
    }
  };

  return (
    <div className="todo-form">
      <h1 className="todo-form__title">새로운 할 일 생성</h1>
      <input
        value={content}
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
