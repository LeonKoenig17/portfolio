import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ScrollService } from '../../shared/services/scroll.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private scrollService: ScrollService) {}

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }

  http = inject(HttpClient);

  uncheckedPath = "M2.5 18C1.95 18 1.47917 17.8042 1.0875 17.4125C0.695833 17.0208 0.5 16.55 0.5 16V2C0.5 1.45 0.695833 0.979167 1.0875 0.5875C1.47917 0.195833 1.95 0 2.5 0H16.5C17.05 0 17.5208 0.195833 17.9125 0.5875C18.3042 0.979167 18.5 1.45 18.5 2V16C18.5 16.55 18.3042 17.0208 17.9125 17.4125C17.5208 17.8042 17.05 18 16.5 18H2.5ZM2.5 16H16.5V2H2.5V16Z";
  checkedPath = "M7.6 10.4L5.45 8.25C5.26667 8.06667 5.03333 7.975 4.75 7.975C4.46667 7.975 4.23333 8.06667 4.05 8.25C3.86667 8.43333 3.775 8.66667 3.775 8.95C3.775 9.23333 3.86667 9.46667 4.05 9.65L6.9 12.5C7.1 12.7 7.33333 12.8 7.6 12.8C7.86667 12.8 8.1 12.7 8.3 12.5L13.95 6.85C14.1333 6.66667 14.225 6.43333 14.225 6.15C14.225 5.86667 14.1333 5.63333 13.95 5.45C13.7667 5.26667 13.5333 5.175 13.25 5.175C12.9667 5.175 12.7333 5.26667 12.55 5.45L7.6 10.4ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16Z";
  currentPath = this.uncheckedPath;

  togglePath() {
    this.currentPath = this.currentPath == this.uncheckedPath
      ? this.checkedPath
      : this.uncheckedPath;
  }

  contactData = {
    name: "",
    email: "",
    message: ""
  }
  mailTest = false; // test mode (does not send actual email)
  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm(); // Test mode: just reset the form without sending
      this.currentPath = this.uncheckedPath;
    }
  }
}