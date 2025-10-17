import { Component } from '@angular/core';
import { DeviceService } from '../../shared/services/device.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [NgIf, AsyncPipe, TranslatePipe, RouterLink],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  constructor(public deviceService: DeviceService) {}
}
