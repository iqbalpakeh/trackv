import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';
import { LoginComponent } from './sections/login/login.component';
import { IssueShortComponent } from './reusables/issue-short/issue-short.component';
import { SelectorComponent } from './reusables/selector/selector.component';
import { ButtonComponent } from './reusables/button/button.component';
import { FooterComponent } from './sections/footer/footer.component';
import { SearchComponent } from './sections/search/search.component';
import { HeaderComponent } from './sections/header/header.component';
import { ContentComponent } from './sections/content/content.component';
import { IssueDetailsComponent } from './reusables/issue-details/issue-details.component';
import { ModalAddProjectComponent } from './sections/modal-add-project/modal-add-project.component';
import { ModalAddIssueComponent } from './sections/modal-add-issue/modal-add-issue.component';
import { IssueMonitorComponent } from './reusables/issue-monitor/issue-monitor.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SearchComponent,
    ButtonComponent,
    IssueShortComponent,
    IssueDetailsComponent,
    SelectorComponent,
    ModalAddProjectComponent,
    ModalAddIssueComponent,
    IssueMonitorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
