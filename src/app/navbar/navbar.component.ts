import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from '../global-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  username = 'BABA';

  constructor(public globalState: GlobalStateService) {}

  ngOnInit(): void {}
}
