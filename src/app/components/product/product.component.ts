import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductType;

  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor(private cartService: CartService) {
    this.product = {
      title: '',
      amount: 0,
      price: 0,
      img: '',
    }
  }

  ngOnInit(): void {
  }

  public addProductToCart(): void {
    this.addToCartEvent.emit(this.product);
    this.cartService.title = this.product.title;
    this.cartService.addCount()
    this.cartService.addAmount(this.product.price)
  }
}
