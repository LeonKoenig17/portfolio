import { Component } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../shared/services/device.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private scrollService: ScrollService, public deviceService: DeviceService) {}

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
