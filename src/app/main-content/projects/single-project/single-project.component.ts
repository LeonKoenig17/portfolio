import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() data = {
    image: "./assets/images/join.png",
    title: "Join",
    skills: "Angular | TypeScript | HTML | CSS | Firebase",
    text: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. "
  };

  @Input() isReversed = false;
}
