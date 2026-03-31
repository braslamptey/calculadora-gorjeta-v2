import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage {
  valorConta: number = 0;
  porcentagem: number = 10;
  gorjeta: number = 0;
  total: number = 0;

  constructor() {}

  calcular() {
    if (this.valorConta > 0) {
      this.gorjeta = this.valorConta * (this.porcentagem / 100);
      this.total = Number(this.valorConta) + Number(this.gorjeta);
    }
  }
}