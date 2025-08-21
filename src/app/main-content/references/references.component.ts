import { Component } from '@angular/core';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommentComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  comments = [
    {
      name: "Noah Müller",
      project: "Project Sharkie",
      text: `
        "Marcus had to develop, format and deliver content in collaboration 
        with the team members.He is a reliable and friendly person."
      `
    }
  ]
}
