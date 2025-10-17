import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../shared/services/device.service';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(public deviceService: DeviceService) {}
}
