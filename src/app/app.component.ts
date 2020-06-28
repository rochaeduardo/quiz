import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  jogoEmAndamento: boolean = true;
  tipoEncerramento: string;
  color: string = 'orange';

  encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;
  }
  reiniciarJogo() {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = undefined;
  }
}
