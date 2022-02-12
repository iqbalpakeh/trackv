import { Component, OnInit } from '@angular/core';

import { issues } from '../../data/issue-samples';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  issues = issues;

  constructor() {}

  ngOnInit(): void {}
}
