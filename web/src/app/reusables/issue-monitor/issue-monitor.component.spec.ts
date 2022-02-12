import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueMonitorComponent } from './issue-monitor.component';

describe('IssueMonitorComponent', () => {
  let component: IssueMonitorComponent;
  let fixture: ComponentFixture<IssueMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
