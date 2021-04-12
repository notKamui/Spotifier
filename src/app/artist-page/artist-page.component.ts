import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from '../model/api_model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.sass'],
})
export class ArtistPageComponent implements OnInit {
  tracks: Track[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.artistId;
    this.apiService
      .getTracksOfArtist(id)
      .subscribe((tracks: Track[]) => (this.tracks = tracks));
  }
}
