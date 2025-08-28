import { Component } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private scrollService: ScrollService) {}

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
