import {TestBed, waitForAsync} from '@angular/core/testing';
import {TaskListComponent} from './list.component';
import {BackendService} from "../backend.service";
import { FormsModule } from '@angular/forms';

describe('TaskListComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        TaskListComponent
      ],
      providers: [
        {provide: BackendService, useValue: new BackendService()}
      ]

    }).compileComponents();
  }));

  it('should create the app', (() => {
    const fixture = TestBed.createComponent(TaskListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h2 tag', (() => {
    const fixture = TestBed.createComponent(TaskListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Tasks');
  }));
});
