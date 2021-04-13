import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ApiService } from '../service/api.service';
import { GlobalStateService } from '../service/global-state.service';

export interface PlaylistCreationDialogData {
  playlistName: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public globalState: GlobalStateService,
    private apiService: ApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PlaylistCreationDialogComponent, {
      width: '30em',
      data: { playlistName: '' },
    });

    dialogRef.afterClosed().subscribe((playlistName: string) => {
      this.apiService
        .createPlaylistForUser(this.globalState.getUsername(), playlistName)
        .subscribe((status: boolean) => {
          if (status) {
            this.globalState.refreshPlaylists();
          } else {
            console.log('Error: could not POST new playlist');
          }
        });
    });
  }
}

@Component({
  selector: 'app-playlist-creation-dialog',
  templateUrl: './playlist-creation.dialog.html',
})
export class PlaylistCreationDialogComponent implements OnInit {
  constructor(
    private globalState: GlobalStateService,
    public dialogRef: MatDialogRef<PlaylistCreationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlaylistCreationDialogData
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
