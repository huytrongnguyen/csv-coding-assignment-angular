import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BackendService, Task, User } from "../backend.service";

@Component({
  selector: 'task-detail',
  templateUrl: './detail.component.html'
})
export class TaskDetailComponent implements OnInit {
  task: Task;
  users: User[] = [];
  selectedUser: string;
  status = false;

  constructor(private route: ActivatedRoute, private backend: BackendService) {
    this.backend.users().subscribe(x => this.users = x);
  }

  ngOnInit(): void {
    this.backend.task(this.route.snapshot.params['id']).subscribe(this.loadTask.bind(this));

  }

  loadTask(task: Task) {
    this.task = task ?? {} as Task;
    this.selectedUser = this.task.assigneeId?.toString();
    this.status = this.task.completed;
  }

  update(): void {
    if (this.selectedUser) {
      this.task.assigneeId = parseInt(this.selectedUser, 10);
    }
    this.task.completed = this.status;
    this.backend.update(this.task.id, this.task).subscribe(this.loadTask.bind(this));
  }
}