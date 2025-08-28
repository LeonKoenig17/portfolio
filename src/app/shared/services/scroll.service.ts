import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }
  private scrollTarget = new Subject<string>();
  scrollTarget$ = this.scrollTarget.asObservable();

  scrollTo(sectionId: string) {
    this.scrollTarget.next(sectionId);
  }
}
