import QuickTodoGenerationForm from "../QuickTodoGenerationForm";
import TodoGroupByDate from "../TodoGroupByDate";

import "./index.css";
import useTodoList, { DATE_NULL_STR } from "./useTodoList";

const TodoList = () => {
  const [groupedByDateTodoList, createTodo, deleteTodo] = useTodoList();

  const groupItems = Object.entries(groupedByDateTodoList)
    .sort(([a], [b]) => (a > b ? 1 : -1))
    .map(([key, todoList]) => (
      <TodoGroupByDate
        key={key}
        dateString={key === DATE_NULL_STR ? null : key}
        todoList={todoList}
        deleteTodo={deleteTodo}
      />
    ));

  return (
    <div className="todo-list">
      <QuickTodoGenerationForm createTodo={createTodo} />

      {Object.keys(groupedByDateTodoList).length === 0 ? (
        <p className="todo-list__text--empty">📦 할 일을 모두 해결했어요 :)</p>
      ) : (
        <ul>{groupItems}</ul>
      )}
    </div>
  );
};

export default TodoList;
