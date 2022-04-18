import { Component } from '@angular/core';
import { TiempoService } from './services/tiempo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-time';

  constructor(private servicio_de_tiempo:TiempoService){}

  buscar(nombreABuscar:any){
    console.log(nombreABuscar.value)


  }
}
