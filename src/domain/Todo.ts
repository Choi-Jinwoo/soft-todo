export type TodoAttrs = {
  id: string;
  content: string;
  date: Date | null;
};

class Todo {
  public id: string;
  public content: string;
  public date: Date | null;

  constructor(todo: TodoAttrs) {
    this.id = todo.id;
    this.content = todo.content;
    this.date = todo.date && new Date(todo.date);
  }
}

export default Todo;
