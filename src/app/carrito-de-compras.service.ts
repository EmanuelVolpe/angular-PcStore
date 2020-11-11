import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Computadora } from './lista-pc/Computadora';

/**
 * Maneja la Lógica del carrito
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class CarritoDeComprasService {

  private _listaCarrito: Computadora [] = [];
  listaCarrito: BehaviorSubject<Computadora[]> = new BehaviorSubject([]);

  constructor() { }

  agregaAlCarrito(computadora: Computadora) {
    let item: Computadora = this._listaCarrito.find((v1) => v1.modelo == computadora.modelo);  
    if(!item){
      this._listaCarrito.push({...computadora});
    } else {
        item.quantity += computadora.quantity;
    }
    console.log(this._listaCarrito);
    this.listaCarrito.next(this._listaCarrito); //equivalente al emmit de eventos.
  }
}
