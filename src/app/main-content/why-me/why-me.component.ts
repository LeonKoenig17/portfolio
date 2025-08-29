import { Component } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  constructor(private scrollService: ScrollService) {}
  
  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
