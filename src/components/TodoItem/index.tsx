import "./index.css";

type Props = {
  todo: string;
};

const TodoItem = ({ todo }: Props) => {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <div className="todo-item__button--done" />
    </li>
  );
};

export default TodoItem;
