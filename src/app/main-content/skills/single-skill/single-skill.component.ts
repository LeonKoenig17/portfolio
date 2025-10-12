import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-single-skill',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss'
})

export class SingleSkillComponent {
  @Input() skill: { img: string; text: string; message?: string } = {
    img: "",
    text: ""
  }
}
