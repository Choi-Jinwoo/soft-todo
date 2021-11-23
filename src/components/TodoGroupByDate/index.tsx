import Todo from "../../domain/Todo";
import TodoItem from "../TodoItem";

import "./index.css";

type Props = {
  todoList: Todo[];
  dateString: string | null;
  deleteTodo: (id: string) => void;
};

const TodoGroupByDate = ({ todoList, dateString, deleteTodo }: Props) => {
  const todoItems = todoList.map((todo) => (
    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}></TodoItem>
  ));

  const formattedDateString =
    dateString && new Date(dateString).toLocaleDateString();

  return (
    <li className="todo-group-by-date">
      <span className="todo-group-by-date__date">
        {formattedDateString ?? "기한 없음"}
      </span>
      <ul>{todoItems}</ul>
    </li>
  );
};

export default TodoGroupByDate;
