import { Component } from '@angular/core';
import { DeviceService } from '../shared/services/device.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(public deviceService: DeviceService) {}
}
