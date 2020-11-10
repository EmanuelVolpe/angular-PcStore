import { Component, OnInit } from '@angular/core';
import { Computadora } from './Computadora';

@Component({
  selector: 'app-lista-pc',
  templateUrl: './lista-pc.component.html',
  styleUrls: ['./lista-pc.component.css']
})
export class ListaPcComponent implements OnInit {

  computadoras: Computadora[] = 
  [
    {
      modelo:"Acer 7200", 
      procesador:"Intel i5",
      memoria:8, 
      precio:140000,
      stock:10,
      clearance:false,
      quantity: 0,
    },
    {
      modelo:"HP 5000", 
      procesador:"Ryzen 8",
      memoria:8, 
      precio:130000,
      stock:20,
      clearance:true,
      quantity: 0,
    },
    {
      modelo:"MSI GL62", 
      procesador:"Intel i7",
      memoria:12, 
      precio:250000,
      stock:0,
      clearance:false,
      quantity: 0,
    },
    {
      modelo:"Asus XJ 100", 
      procesador:"Intel i5",
      memoria:8, 
      precio:170000,
      stock:15,
      clearance:false,
      quantity: 0,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(computadora: Computadora): void {
    if(computadora.quantity < computadora.stock)
    computadora.quantity++;
  }

  downQuantity(computadora: Computadora): void {
    if(computadora.quantity > 0)
    computadora.quantity--;
  }

  changeQuantity($event, computadora: Computadora){
    console.log(event.target);
  }

}
