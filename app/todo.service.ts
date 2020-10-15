import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    public todos = ['Submit Project 3', 'Study Angular docs', 'Review Ionic components'];
    private archivedTodos: string[] = [];

    constructor() {
    }

    public getArchivedTodos() {
      return this.archivedTodos;
  }
    public getTodos() {
        return this.todos;
    }

    public addTodo(todo: string) {
        this.todos.push(todo);
    }

    public archiveTodo(todoIndex: number) {
      this.archivedTodos.push( this.todos[todoIndex] );
      this.todos.splice( todoIndex, 1 );
  }
    
}