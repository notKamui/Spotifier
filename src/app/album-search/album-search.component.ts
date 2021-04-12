import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Album } from '../model/api_model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-album-search',
  templateUrl: './album-search.component.html',
  styleUrls: ['./album-search.component.sass'],
})
export class AlbumSearchComponent implements OnInit {
  albumSearch = new FormControl('', [Validators.required]);
  albums: Album[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  getErrorMessage(): string {
    if (this.albumSearch.hasError('required')) {
      return 'Vous devez entrer un nom';
    }

    return '';
  }

  search(): void {
    this.apiService
      .getAlbumsFromName(this.albumSearch.value)
      .subscribe((albums: Album[]) => (this.albums = albums));
  }
}
