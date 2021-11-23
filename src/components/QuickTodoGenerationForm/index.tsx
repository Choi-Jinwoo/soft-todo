import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";
import shortid from "shortid";
import Todo from "../../domain/Todo";

import "./index.css";

type Props = {
  createTodo: (todo: Todo) => void;
};

const DATE_REGEXP = /, \d{4}-\d{2}-\d{2}$/;

const QuickTodoGenerationForm = ({ createTodo }: Props) => {
  const [content, setContent] = useState("");

  const onTodoChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setContent(e.target.value);
  };

  const onKeyPress: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      const date = content.match(DATE_REGEXP);

      createTodo(
        new Todo({
          id: shortid.generate(),
          content: content.replace(DATE_REGEXP, ''),
          date: date && new Date(date[0]),
        })
      );
      setContent("");
    }
  };

  return (
    <div className="quick-todo-generation-form">
      <h1 className="quick-todo-generation-form__title">새로운 할 일 생성</h1>
      <input
        value={content}
        onChange={onTodoChange}
        onKeyPress={onKeyPress}
        type="text"
        id="todo-input"
        className="quick-todo-generation-form__input quick-todo-generation-form__input--create"
        placeholder="새로운 할 일을 작성해보세요!"
      />
    </div>
  );
};

export default QuickTodoGenerationForm;
