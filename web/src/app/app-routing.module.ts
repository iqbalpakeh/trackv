import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssueDetailsComponent } from './reusables/issue-details/issue-details.component';
import { ModalAddIssueComponent } from './sections/modal-add-issue/modal-add-issue.component';
import { ModalAddProjectComponent } from './sections/modal-add-project/modal-add-project.component';

const routes: Routes = [
  { path: 'issues/:issueId', component: IssueDetailsComponent },
  {
    path: 'add-project',
    component: ModalAddProjectComponent,
    outlet: 'modal',
  },
  {
    path: 'add-issue',
    component: ModalAddIssueComponent,
    outlet: 'modal',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
