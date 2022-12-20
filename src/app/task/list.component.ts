import { Component, OnInit } from "@angular/core";
import { BackendService, Task } from "../backend.service";

@Component({
  selector: 'task-list',
  templateUrl: './list.component.html'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  users = this.backend.users();
  newTaskDescription = '';
  filterString = '';

  constructor(private backend: BackendService) {
    this.backend.tasks().subscribe(x => this.tasks = x);
  }

  addNew() {
    console.log(`add new task = ${this.newTaskDescription}`);
    this.backend.newTask({ description: this.newTaskDescription }).subscribe(x => this.tasks.push(x));
  }

  ngOnInit(): void { }
}