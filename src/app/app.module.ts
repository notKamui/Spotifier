import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { HomeComponent } from './home/home.component';
import {
  NavbarComponent,
  PlaylistCreationDialogComponent,
} from './navbar/navbar.component';
import { ConnectComponent } from './connect/connect.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { AlbumSearchComponent } from './album-search/album-search.component';
import {
  PlaylistAddDialogComponent,
  TracklistComponent,
} from './tracklist/tracklist.component';
import { PlaylistPageComponent } from './playlist-page/playlist-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistPageComponent,
    AlbumPageComponent,
    HomeComponent,
    NavbarComponent,
    PlaylistCreationDialogComponent,
    ConnectComponent,
    SearchComponent,
    ArtistSearchComponent,
    AlbumSearchComponent,
    TracklistComponent,
    PlaylistAddDialogComponent,
    PlaylistPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
