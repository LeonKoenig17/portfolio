import { Component } from '@angular/core';
import { DeviceService } from '../shared/services/device.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  constructor(public deviceService: DeviceService) {}

}
