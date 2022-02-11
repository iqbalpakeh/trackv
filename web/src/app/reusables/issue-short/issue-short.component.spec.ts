import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueShortComponent } from './issue-short.component';

describe('IssueShortComponent', () => {
  let component: IssueShortComponent;
  let fixture: ComponentFixture<IssueShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
