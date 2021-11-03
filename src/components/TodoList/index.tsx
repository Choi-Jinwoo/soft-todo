import { useState } from "react";
import shortid from "shortid";
import TodoForm from "../TodoForm";
import TodoItem from "../TodoItem";

import "./index.css";

const TodoList = () => {
  const [todoList, setTodoList] = useState<string[]>(["1", "1", "2"]);

  const createTodo = (todo: string) => {
    const newTodoList = [todo, ...todoList];
    setTodoList(newTodoList);
  };

  const todoItems = todoList.map((todo) => (
    <TodoItem key={shortid.generate()} todo={todo} />
  ));

  return (
    <div>
      <TodoForm />

      {todoItems.length === 0 ? (
        <p className="todo-list__text--empty">📦 할 일을 모두 해결했어요 :)</p>
      ) : (
        todoItems
      )}
    </div>
  );
};

export default TodoList;
