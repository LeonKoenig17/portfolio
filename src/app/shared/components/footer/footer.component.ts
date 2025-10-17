import { Component } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AsyncPipe, NgIf, TranslatePipe, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public deviceService: DeviceService) {}
}
