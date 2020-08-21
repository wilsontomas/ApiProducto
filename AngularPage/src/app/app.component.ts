import { Component } from '@angular/core';
import {ProductoService} from './Servicio/producto.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPage';
  constructor(private servicio: ProductoService){}
  
  ngOnInit(): void {
    this.servicio.GetProductos().subscribe(data=>console.log(data));
  }
  
}
console.log("corriendo");
