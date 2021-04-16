import { Injectable } from '@angular/core';
import { Playlist } from '../model/api_model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private username: string | null = null;
  private playlists: Playlist[] | null = null;

  constructor(private apiService: ApiService) {}

  isConnected(): boolean {
    return this.username != null;
  }

  getUsername(): string {
    return this.username ?? '';
  }

  refreshPlaylists(): void {
    this.apiService
      .getPlaylistsOfUser(this.getUsername())
      .subscribe((playlists: Playlist[]) => (this.playlists = playlists));
  }

  getPlaylists(): Playlist[] {
    return this.playlists ?? [];
  }

  connect(username: string): void {
    this.username = username;
    this.refreshPlaylists();
  }

  disconnect(): void {
    this.username = null;
    this.playlists = null;
  }
}
