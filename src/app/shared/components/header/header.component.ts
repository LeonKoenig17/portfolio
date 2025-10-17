import { Component, inject } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DeviceService } from '../../services/device.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public deviceService: DeviceService) {}

  showMenu = false;

  openMenu() {
    this.showMenu = true;
  }

  closeMenu() {
    this.showMenu = false;
  }

  private translate = inject(TranslateService);

  translateText(lang: string) {
    this.translate.use(lang)
    localStorage.setItem("lang", lang);
  }
}

