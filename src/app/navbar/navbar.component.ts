import { Component, OnInit } from '@angular/core';
import { GlobalStateService } from '../service/global-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  constructor(public globalState: GlobalStateService) {}

  ngOnInit(): void {}
}
