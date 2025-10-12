import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  @Input() comment = {
    name: "Noah Mueller",
    project: "Project Sharkie",
    text: `
      "Marcus had to develop, format and deliver content in collaboration 
      with the team members.He is a reliable and friendly person."
    `
  }
}
