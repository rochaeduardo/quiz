import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit, OnDestroy {
  frases: Frase[] = FRASES;
  // tslint:disable-next-line: no-inferrable-types
  instrucao: string = 'Traduza a Frase';
  resposta: string = '';

  rodada: number = 0;
  rodadaFrase: Frase;
  progresso: number = 0;
  tentativas: number = 3;
  @Output() encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {}

  ngOnDestroy(){}

  atualizaResposta(resposta: Event): void {
    this.resposta = (resposta.target as HTMLInputElement).value;
  }

  verificarResposta() {
    // tslint:disable-next-line: triple-equals
    console.log('tentativas: ', this.tentativas);
    if (this.rodadaFrase.fraseResposta == this.resposta) {
      this.rodada++;

      // progresso
      this.progresso = this.progresso + 100 / this.frases.length;

      if(this.rodada === 4){
       this.encerrarJogo.emit('vitoria');
      }

      // atualiza o objeto rodadaFrase
      this.atualizaRodada();
    } else {
      this.tentativas--;
      if (this.tentativas === -1){
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  atualizaRodada(): void {
    // define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada];
    // Limpa o textarea
    this.resposta = '';
  }
}
