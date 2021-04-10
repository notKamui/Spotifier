import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private username: string | null = null;

  isConnected(): boolean {
    return this.username != null;
  }

  getUsername(): string {
    return this.username ?? '';
  }

  connect(username: string): void {
    this.username = username;
  }

  disconnect(): void {
    this.username = null;
  }
}
