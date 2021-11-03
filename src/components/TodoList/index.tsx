import { useState } from "react";
import shortid from "shortid";
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";

import "./index.css";

const TodoList = () => {
  const [todoList, setTodoList] = useState<string[]>(["1", "1", "2"]);

  const createTodo = (todo: string) => {
    if (todo.trim().length <= 0) return;

    const changedTodoList = [todo, ...todoList];
    setTodoList(changedTodoList);
  };

  const makeDeleteTodoHandler = (index: number) => () => {
    const changedTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1, todoList.length),
    ];
    setTodoList(changedTodoList);
  };

  const todoItems = todoList.map((todo, index) => (
    <TodoItem
      key={shortid.generate()}
      todo={todo}
      deleteTodo={makeDeleteTodoHandler(index)}
    />
  ));

  return (
    <div>
      <TodoForm createTodo={createTodo} />

      {todoItems.length === 0 ? (
        <p className="todo-list__text--empty">📦 할 일을 모두 해결했어요 :)</p>
      ) : (
        todoItems
      )}
    </div>
  );
};

export default TodoList;
