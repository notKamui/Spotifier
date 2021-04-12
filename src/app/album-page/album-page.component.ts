import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from '../model/api_model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.sass'],
})
export class AlbumPageComponent implements OnInit {
  tracks: Track[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.albumId;
    this.apiService
      .getTracksOfAlbum(id)
      .subscribe((tracks: Track[]) => (this.tracks = tracks));
  }
}
