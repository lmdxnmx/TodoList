import { makeAutoObservable } from "mobx";

class Todo {
  todos = [];
  constructor() {
    makeAutoObservable(this);
  }
  addTodo = (value) => {
    if (value) {
      const todo = {
        id: Math.random().toString(36).substr(2, 9),
        task: value,
        complete: false,
      };
      this.todos.push(todo);
    }
  };
  removeTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
  completeTodo = (id) => {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    );
  };

  
}
export default new Todo();
