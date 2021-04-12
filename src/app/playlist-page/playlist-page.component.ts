import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from '../model/api_model';
import { ApiService } from '../service/api.service';
import { GlobalStateService } from '../service/global-state.service';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.sass'],
})
export class PlaylistPageComponent implements OnInit {
  tracks: Track[] = [];

  constructor(
    private globalState: GlobalStateService,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.playlistId;
    this.apiService
      .getTracksOfUserFromPlaylist(this.globalState.getUsername(), id)
      .subscribe((tracks: Track[]) => (this.tracks = tracks));
  }
}
