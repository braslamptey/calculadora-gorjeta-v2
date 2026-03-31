import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valorConta: number = 0;
  porcentagem: number = 10;
  total: number = 0;

  constructor() {}

  calcular() {
    let gorjeta = this.valorConta * (this.porcentagem / 100);
    this.total = Number(this.valorConta) + Number(gorjeta);
  }
}