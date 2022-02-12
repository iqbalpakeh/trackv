import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue-short',
  templateUrl: './issue-short.component.html',
  styleUrls: ['./issue-short.component.css'],
})
export class IssueShortComponent implements OnInit {
  id = 'ID0001X';

  describtion =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem asperiores nihil nisi optio mollitia? Nulla, consectetur quam provident odio nobis vel exercitationem rem aperiam molestias minima natus qui perferendis.';

  constructor() {}

  ngOnInit(): void {}
}
