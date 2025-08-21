import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-skill',
  standalone: true,
  imports: [],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss'
})
export class SingleSkillComponent {
  @Input() skill = {img: "", text: ""};
}
