import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Artist } from '../model/api_model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.sass'],
})
export class ArtistSearchComponent implements OnInit {
  artistSearch = new FormControl('', [Validators.required]);
  artists: Artist[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  getErrorMessage(): string {
    if (this.artistSearch.hasError('required')) {
      return 'Vous devez entrer un nom';
    }

    return '';
  }

  search(): void {
    this.apiService
      .getArtistsFromName(this.artistSearch.value)
      .subscribe((artists: Artist[]) => (this.artists = artists));
  }
}
