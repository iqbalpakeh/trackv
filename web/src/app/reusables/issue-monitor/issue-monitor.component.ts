import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-issue-monitor',
  templateUrl: './issue-monitor.component.html',
  styleUrls: ['./issue-monitor.component.css'],
})
export class IssueMonitorComponent implements OnInit {
  @Input() text = '';

  constructor() {}

  ngOnInit(): void {}
}
