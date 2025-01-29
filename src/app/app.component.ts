import { Component } from '@angular/core';
import {ProductType} from "./types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Macaroons';
  instagramLink = 'https://www.instagram.com/';
  phone = '+375 (29) 368-98-68';
  showPresent: boolean = true;

  public scrollTo(target: HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  }


  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }

  public createOrder() {
    let inputs = Array.from(document.querySelectorAll('input'));
    for (const input of inputs) {
      if ((input as HTMLInputElement).value === '') {
        alert(`Заполните поле ${(input as HTMLInputElement).placeholder}`);
        return;
      }
    }

    (document.querySelector('.order__wrapper') as HTMLElement).style.opacity = '0';
    (document.querySelector('.order__success') as HTMLElement).setAttribute('style', 'opacity: 1; z-index: 1');

    this.formValues = {
      productTitle: '',
      name: '',
      phone: '',
    }
  }

  public advantages = [
    {
      title: 'Лучшие продукты',
      text: `Мы честно готовим макаруны только из натуральных и качественных продуктов.
             Мы не используем консерванты, ароматизаторы и красители.`
    },
    {
      title: 'Много вкусов',
      text: `Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но
             у нас более 70 вкусов пироженок.`
    },
    {
      title: 'Бисквитное тесто',
      text: `Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет
             маргарина и дрожжей!`
    },
    {
      title: 'Честный продукт',
      text: `Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы
             получили 22.06.2016 г.`
    },
  ]

  public products: ProductType[] = [
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
