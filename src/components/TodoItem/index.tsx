import Todo from "../../domain/Todo";
import "./index.css";

type Props = {
  todo: Todo;
  deleteTodo: () => void;
};

const TodoItem = ({ todo, deleteTodo }: Props) => {
  return (
    <li className="todo-item">
      <span>{todo.content}</span>
      <div className="todo-item__button--done" onClick={deleteTodo} />
    </li>
  );
};

export default TodoItem;
