import "./index.css";

type Props = {
  todo: string;
  deleteTodo: () => void;
};

const TodoItem = ({ todo, deleteTodo }: Props) => {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <div className="todo-item__button--done" onClick={deleteTodo} />
    </li>
  );
};

export default TodoItem;
