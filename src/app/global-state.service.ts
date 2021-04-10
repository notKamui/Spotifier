import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private userIsConnected = false;

  isUserConnected(): boolean {
    return this.userIsConnected;
  }

  toggleUserIsConnected(): void {
    this.userIsConnected = !this.userIsConnected;
  }
}
