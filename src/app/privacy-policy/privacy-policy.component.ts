import { Component } from '@angular/core';
import { DeviceService } from '../shared/services/device.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NgIf, AsyncPipe, TranslatePipe, RouterLink],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(public deviceService: DeviceService) {}
}
