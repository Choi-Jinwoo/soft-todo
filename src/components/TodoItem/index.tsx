import Todo from "../../domain/Todo";
import "./index.css";

type Props = {
  todo: Todo;
  deleteTodo: (id: string) => void;
};

const TodoItem = ({ todo, deleteTodo }: Props) => {
  const onDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className="todo-item">
      <span>{todo.content}</span>
      <div className="todo-item__button--done" onClick={onDeleteClick} />
    </li>
  );
};

export default TodoItem;
