import { Component } from '@angular/core';
import { CommentComponent } from './comment/comment.component';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../shared/services/device.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommentComponent, CommonModule, TranslatePipe],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  constructor(public deviceService: DeviceService) {}

  comments = [
    {
      name: "Jannik Marsall",
      project: "Pokedex",
      text: "references.pokedex"
    },
    {
      name: "Dennis Arcud",
      project: "Los Virales",
      text: "references.los-virales"
    },
    {
      name: "Sophie Kenbock",
      project: "Join",
      text: "references.join"
    }
  ]
}
