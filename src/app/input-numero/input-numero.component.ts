import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-numero',
  templateUrl: './input-numero.component.html',
  styleUrls: ['./input-numero.component.css']
})
export class InputNumeroComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else
      this.maxReached.emit("Se alcanzó el máximo de unidades");
  }

  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity($event){
    console.log(event.target);
    this.quantityChange.emit(this.quantity);
  }

}
