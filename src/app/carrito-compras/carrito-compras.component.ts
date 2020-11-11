import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CarritoDeComprasService } from '../carrito-de-compras.service';
import { Computadora } from '../lista-pc/Computadora';
import { ListaPcComponent } from '../lista-pc/lista-pc.component';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  
  listaCarrito$: Observable<Computadora[]>;
  
  constructor(private carrito:CarritoDeComprasService) { 
    this.listaCarrito$ = carrito.listaCarrito.asObservable();
  }

  ngOnInit(): void {
  }

}
