import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  AddSongToPlaylist,
  Album,
  AlbumResponse,
  Artist,
  ArtistResponse,
  Playlist,
  PlaylistCreation,
  PlaylistResponse,
  Track,
  TrackResponse,
} from './model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getArtistsFromName(name: string): Observable<Artist[]> {
    return this.httpClient
      .get<ArtistResponse>(
        'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/data/artist?name=' +
          name
      )
      .pipe(map((res: ArtistResponse) => res.artists));
  }

  getAlbumsFromName(name: string): Observable<Album[]> {
    return this.httpClient
      .get<AlbumResponse>(
        'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/data/album?name=' +
          name
      )
      .pipe(map((res: AlbumResponse) => res.albums));
  }

  getTracksOfArtist(artist: string): Observable<Track[]> {
    return this.httpClient
      .get<TrackResponse>(
        'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/data/artist/' +
          artist +
          '/tracks'
      )
      .pipe(map((res: TrackResponse) => res.tracks));
  }

  getTracksOfAlbum(album: string): Observable<Track[]> {
    return this.httpClient
      .get<TrackResponse>(
        'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/data/album/' +
          album +
          '/tracks'
      )
      .pipe(map((res: TrackResponse) => res.tracks));
  }

  getPlaylistsOfUser(username: string): Observable<Playlist[]> {
    return this.httpClient
      .get<PlaylistResponse>(
        'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/user/' +
          username +
          '/playlist'
      )
      .pipe(map((res: PlaylistResponse) => res.playlists));
  }

  getTracksOfUserFromPlaylist(
    username: string,
    playlistId: string
  ): Observable<Track[]> {
    return this.httpClient
      .get<TrackResponse>(
        'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/user/' +
          username +
          '/playlist/' +
          playlistId
      )
      .pipe(map((res: TrackResponse) => res.tracks));
  }

  createPlaylistForUser(
    username: string,
    playlistName: string
  ): Observable<boolean> {
    return this.httpClient
      .post<PlaylistCreation>(
        'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/user/' +
          username +
          '/playlist',
        { name: playlistName }
      )
      .pipe(
        map((_) => true),
        catchError((_) => of(false))
      );
  }

  addTrackToPlaylistOfUser(
    username: string,
    playlistId: string,
    songId: string
  ): void {
    this.httpClient.put<AddSongToPlaylist>(
      'https://europe-west1-cours-angular-263913.cloudfunctions.net/apiSpotify/api/user/' +
        username +
        '/playlist/' +
        playlistId,
      { songId }
    );
  }
}
