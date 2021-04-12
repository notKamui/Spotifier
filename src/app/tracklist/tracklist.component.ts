import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../model/api_model';
import { GlobalStateService } from '../service/global-state.service';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.sass'],
})
export class TracklistComponent implements OnInit {
  @Input()
  tracks: Track[] = [];

  constructor(public globalState: GlobalStateService) {}

  ngOnInit(): void {}
}
