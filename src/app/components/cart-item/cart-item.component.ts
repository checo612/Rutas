import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  numero: string;
  constructor() { }

  ngOnInit() {
  }

  comprar() {
    alert(`Se compro ${this.numero} de: ${this.name}`);
  }

}
