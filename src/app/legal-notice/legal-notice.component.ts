import { Component } from '@angular/core';
import { DeviceService } from '../shared/services/device.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NgIf, AsyncPipe, TranslatePipe, RouterLink],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(public deviceService: DeviceService) {}
}
