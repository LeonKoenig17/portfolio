import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {

  }

  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
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

