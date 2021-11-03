const KEY = "todo";

export const fetchTodoList = (): string[] => {
  return JSON.parse(localStorage.getItem(KEY) ?? "[]");
};

export const saveTodoList = (todoList: string[]) => {
  return localStorage.setItem(KEY, JSON.stringify(todoList));
};
