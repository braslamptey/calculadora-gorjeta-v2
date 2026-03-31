import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ADICIONE ESTA LINHA
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, // Certifique-se que isso está aqui
  imports: [IonicModule, CommonModule, FormsModule], // ADICIONE O CommonModule AQUI
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