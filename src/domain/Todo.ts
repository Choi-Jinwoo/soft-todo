export type TodoAttrs = {
  content: string;
  date: Date | null;
};

class Todo {
  public content: string;
  public date: Date | null;

  constructor(todo: TodoAttrs) {
    this.content = todo.content;
    this.date = todo.date;
  }
}

export default Todo;
