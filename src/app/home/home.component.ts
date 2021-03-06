import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from '../service/global-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor(public globalState: GlobalStateService) {}

  ngOnInit(): void {}
}
