import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.globalState.isConnected()) {
      this.router.navigate(['/']);
    }

    this.route.paramMap
      .pipe(
        switchMap((params) =>
          this.apiService.getTracksOfUserFromPlaylist(
            this.globalState.getUsername(),
            params.get('playlistId') ?? ''
          )
        )
      )
      .subscribe((tracks: Track[]) => (this.tracks = tracks));
  }
}
