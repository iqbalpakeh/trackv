import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Issue, issues } from '../../data/issue-samples';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css'],
})
export class IssueDetailsComponent implements OnInit {
  issue: Issue | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const issueIdFromRoute = routeParams.get('issueId');

    console.log(routeParams);
    console.log(`id: ${issueIdFromRoute}`);

    this.issue = issues.find((issue) => issue.id === issueIdFromRoute);

    // this.issue = {
    //   id: 'ID0002',
    //   short: 'HELLO',
    // };
  }
}
