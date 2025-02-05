import { Injectable } from '@angular/core';
import {ProductType} from "../types";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): ProductType[] {
    return [
      {
        title: 'Макарун с малиной',
        amount: 1,
        price: 1.7,
        img: 'macaroon_1.png'
      },
      {
        title: 'Макарун с манго',
        amount: 1,
        price: 1.7,
        img: 'macaroon_2.png'
      },
      {
        title: 'Пирог с ванилью',
        amount: 1,
        price: 1.7,
        img: 'macaroon_3.png'
      },
      {
        title: 'Пирог с фисташками',
        amount: 1,
        price: 1.7,
        img: 'macaroon_4.png'
      },
    ]
  }

}
