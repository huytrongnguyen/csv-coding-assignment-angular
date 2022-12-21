import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {TaskListComponent} from './list.component';
import {BackendService} from "../backend.service";
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {RouterTestingModule} from "@angular/router/testing";

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([
          { path: '', component: TaskListComponent },
        ]),
      ],
      declarations: [
        TaskListComponent
      ],
      providers: [
        {provide: BackendService, useValue: new BackendService()}
      ]

    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(TaskListComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  }));

  it('should create the app', (() => {
    expect(component).toBeTruthy();
  }));

  it('should render title in a h2 tag', (() => {
    fixture.detectChanges();
    expect(el.nativeElement.querySelector('h2').textContent).toContain('Tasks');
  }));

  it('should display the task list', () => {
    fixture.detectChanges();
    const tasks = el.queryAll(By.css('.task'));
    expect(tasks).toBeTruthy('Could not find tasks');
    expect(tasks.length).toBe(2, 'Unexpected number of tasks');

});
});
