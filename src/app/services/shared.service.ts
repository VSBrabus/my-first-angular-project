import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private infoComponentVisibleSubject = new Subject<boolean>();

  infoComponentVisible$: Observable<boolean> = this.infoComponentVisibleSubject.asObservable();

  showInfoComponent() {
    this.infoComponentVisibleSubject.next(true);
  }

  hideInfoComponent() {
    this.infoComponentVisibleSubject.next(false);
  }
}
