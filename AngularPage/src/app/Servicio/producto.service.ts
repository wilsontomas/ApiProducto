import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IProducto} from '../../Interfaces/IProducto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private ApiUrl: string = 'https://localhost:44386/api/Producto'
 //@Inject('BASE_URL') private baseUrl:string
  constructor(private http:HttpClient) { }

  GetProductos():Observable<IProducto[]>{
    return this.http.get<IProducto[]>(this.ApiUrl);
  }
}
