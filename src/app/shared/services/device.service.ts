import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DeviceService {
  private isMobileSubject = new BehaviorSubject<boolean>(this.checkIsMobile());
  isMobile$ = this.isMobileSubject.asObservable();

  constructor() {
    fromEvent(window, 'resize')
      .pipe(
        startWith(this.checkIsMobile()),
        map(() => this.checkIsMobile())
      )
      .subscribe(isMobile => this.isMobileSubject.next(isMobile));
  }

  private checkIsMobile(): boolean {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
           window.innerWidth <= 800;
  }
}
