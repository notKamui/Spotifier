import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.sass'],
})
export class ConnectComponent implements OnInit {
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  constructor() {}

  ngOnInit(): void {}

  getErrorMessage(): string {
    if (this.username.hasError('required')) {
      return 'Vous devez entrer un nom';
    }

    return this.username.hasError('minLength')
      ? 'Longueur minimale (3) non respectée'
      : '';
  }
}
