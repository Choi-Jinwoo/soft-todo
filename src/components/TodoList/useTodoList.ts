import { useState } from "react";
import Todo from "../../domain/Todo";
import { fetchTodoList, saveTodoList } from "../../lib/storage/todoStorage";

type GroupedByDateTodoList = { [key: string]: Todo[] };

export const DATE_NULL_STR = "DATE_NULL";

type UseTodoListReturns = [
  GroupedByDateTodoList,
  (todo: Todo) => void,
  (id: string) => void
];

const useTodoList = (): UseTodoListReturns => {
  const [todoList, setTodoList] = useState(fetchTodoList());

  const groupedByDateTodoList = todoList.reduce((group, todo) => {
    const key = todo.date === null ? DATE_NULL_STR : todo.date.toDateString();

    if (group[key] === undefined) {
      group[key] = [todo];
    } else {
      group[key].push(todo);
    }

    return group;
  }, {} as GroupedByDateTodoList);

  const createTodo = (todo: Todo) => {
    if (todo.content.trim().length <= 0) return;

    const changedTodoList = [todo, ...todoList];

    setTodoList(changedTodoList);
    saveTodoList(changedTodoList);
  };

  const deleteTodo = (id: string) => {
    const index = todoList.findIndex((todo) => todo.id === id);
    if (index === -1) return;

    const changedTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1, todoList.length),
    ];
    setTodoList(changedTodoList);
    saveTodoList(changedTodoList);
  };

  return [groupedByDateTodoList, createTodo, deleteTodo];
};

export default useTodoList;
