import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalStateService } from '../global-state.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.sass'],
})
export class ConnectComponent implements OnInit {
  username = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z0-9]*'),
    Validators.minLength(3),
    Validators.maxLength(20),
  ]);

  constructor(
    private globalState: GlobalStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.globalState.isConnected()) {
      this.router.navigate(['/']);
    }
  }

  getErrorMessage(): string {
    if (this.username.hasError('required')) {
      return 'Vous devez entrer un nom';
    }

    if (this.username.hasError('pattern')) {
      return 'Votre nom ne peut contenir que des lettres ou des chiffres';
    }

    if (this.username.hasError('minlength')) {
      return 'Longueur minimale (3) non respectée';
    }

    if (this.username.hasError('maxlength')) {
      return 'Longueur maximale (20) non respectée';
    }

    return '';
  }

  submitUsername(): void {
    if (this.username.valid) {
      this.globalState.connect(this.username.value);
      this.username.setValue('');
      this.router.navigate(['/']);
    }
  }
}
