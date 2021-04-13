import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Track } from '../model/api_model';
import { ApiService } from '../service/api.service';
import { GlobalStateService } from '../service/global-state.service';

export interface PlaylistAddDialogData {
  playlistId: string;
}

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.sass'],
})
export class TracklistComponent implements OnInit {
  @Input()
  tracks: Track[] = [];

  @Input()
  isAddable = false;

  constructor(
    public globalState: GlobalStateService,
    private apiService: ApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDialog(songId: string): void {
    const dialogRef = this.dialog.open(PlaylistAddDialogComponent, {
      width: '30em',
      data: { playlistId: '' },
    });

    dialogRef.afterClosed().subscribe((playlistId: string) => {
      this.apiService
        .addTrackToPlaylistOfUser(
          this.globalState.getUsername(),
          playlistId,
          songId
        )
        .subscribe((status: boolean) => {
          if (status) {
            this.globalState.refreshPlaylists();
          } else {
            console.log('Error: could not PUT track');
          }
        });
    });
  }
}

@Component({
  selector: 'app-playlist-add-dialog',
  templateUrl: './playlist-add.dialog.html',
})
export class PlaylistAddDialogComponent implements OnInit {
  constructor(
    public globalState: GlobalStateService,
    public dialogRef: MatDialogRef<PlaylistAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlaylistAddDialogData
  ) {}

  ngOnInit(): void {
    if (!this.globalState.isConnected()) {
      this.onNoClick();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
