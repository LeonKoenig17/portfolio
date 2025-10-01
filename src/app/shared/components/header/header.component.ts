import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from "@angular/common";
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService, public deviceService: DeviceService) {}

  showMenu = false;

  openMenu() {
    this.showMenu = true;
  }

  closeMenu() {
    this.showMenu = false;
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollTo(sectionId);
    this.closeMenu();
  }
}

