import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  valorConta: number | null = null;
  porcentagem: number = 10;
  numPessoas: number = 1;
  
  total: number = 0;
  totalPorPessoa: number = 0;

  constructor() {}

  selecionarPorcentagem(valor: number) {
    this.porcentagem = valor;
    this.calcular();
  }

  calcular() {
    const valor = Number(this.valorConta);
    if (valor > 0) {
      let gorjeta = valor * (this.porcentagem / 100);
      this.total = valor + gorjeta;
      
      let pessoas = this.numPessoas > 0 ? this.numPessoas : 1;
      this.totalPorPessoa = this.total / pessoas;
    } else {
      this.total = 0;
      this.totalPorPessoa = 0;
    }
  }
}