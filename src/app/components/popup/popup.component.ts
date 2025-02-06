import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'popup-component',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  title: string = '';

  constructor(public cartService: CartService) {
  }

  ngOnInit() {
    this.title = this.cartService.title;
  }

}


