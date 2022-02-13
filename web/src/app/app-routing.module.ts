import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssueDetailsComponent } from './reusables/issue-details/issue-details.component';
import { ModalAddProjectComponent } from './sections/modal-add-project/modal-add-project.component';

const routes: Routes = [
  { path: 'issues/:issueId', component: IssueDetailsComponent },
  {
    path: 'projects',
    component: ModalAddProjectComponent,
    outlet: 'addProject',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
