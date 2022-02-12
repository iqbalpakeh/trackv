import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-issue-short',
  templateUrl: './issue-short.component.html',
  styleUrls: ['./issue-short.component.css'],
})
export class IssueShortComponent implements OnInit {
  @Input() id = '';

  @Input() describtion = '';

  constructor() {}

  ngOnInit(): void {}
}
