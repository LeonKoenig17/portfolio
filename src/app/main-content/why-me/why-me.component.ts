import { Component } from '@angular/core';
import { ScrollService } from '../../shared/services/scroll.service';
import { DeviceService } from '../../shared/services/device.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [NgIf, AsyncPipe, TranslatePipe],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  constructor(private scrollService: ScrollService, public deviceService: DeviceService) {}
  
  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
  }
}
