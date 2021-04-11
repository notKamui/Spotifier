import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumPageComponent } from './album-page/album-page.component';
import { AlbumSearchComponent } from './album-search/album-search.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { ConnectComponent } from './connect/connect.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'artist', component: ArtistSearchComponent },
  { path: 'artist/:artistId', component: ArtistPageComponent },
  { path: 'album/:albumId', component: AlbumPageComponent },
  { path: 'album', component: AlbumSearchComponent },
  { path: 'connect', component: ConnectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
