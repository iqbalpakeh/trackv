import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssueDetailsComponent } from './reusables/issue-details/issue-details.component';

const routes: Routes = [
  { path: 'issues/:issueId', component: IssueDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
