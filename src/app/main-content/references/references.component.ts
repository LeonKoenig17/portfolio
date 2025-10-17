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
      name: "Yannick Marsall",
      project: "Kochwelt",
      text: "references.ref1"
    },
    {
      name: "Dennis Arcud",
      project: "Join",
      text: "references.ref2"
    },
    {
      name: "Luca Ristmann",
      project: "Join",
      text: "references.ref3"
    }
  ]
}
