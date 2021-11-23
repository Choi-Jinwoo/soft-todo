import Todo, { TodoAttrs } from "../../domain/Todo";

const KEY = "todo";

export const fetchTodoList = (): Todo[] => {
  const todoList: TodoAttrs[] = JSON.parse(localStorage.getItem(KEY) ?? "[]");

  return todoList.map((todo) => new Todo(todo));
};

export const saveTodoList = (todoList: Todo[]) => {
  return localStorage.setItem(KEY, JSON.stringify(todoList));
};
