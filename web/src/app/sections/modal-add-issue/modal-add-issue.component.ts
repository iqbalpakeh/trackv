import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-add-issue',
  templateUrl: './modal-add-issue.component.html',
  styleUrls: ['./modal-add-issue.component.css'],
})
export class ModalAddIssueComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { modal: null } }]);
  }
}
