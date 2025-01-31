import {Component} from '@angular/core';
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

  private initialCheck: boolean = true;
  public successOrder: boolean = false;
  public orderSent: boolean = false;
  public burgerMenuOpen: boolean = false;

  public scrollTo(target: HTMLElement) {
    console.log(target)
    target.scrollIntoView({ behavior: 'smooth' });
  }

  public formValues: {[key: string]: string} = {
    productTitle: '',
    name: '',
    phone: '',
  }

  public formInValidCheck: {[key: string]: boolean} = {
    productTitle: false,
    name: false,
    phone: false,
  }


  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues['productTitle'] = product.title.toUpperCase();
    this.orderSent = false;
  }

  public createOrder() {
    this.initialCheck = false;
    let isValid: boolean = true
    Object.entries(this.formValues).forEach(([key, value]) => {
      let options: {} | null = null;

      if (key === 'phone') {
        options = {pattern: /^\d{10}$/}
      }
      if (!this.isValidField(value, options)) {
        isValid = false;
        this.formInValidCheck[key] = true;
      } else {
        this.formInValidCheck[key] = false
      }
    })

    if (isValid) {
      this.successOrder = true;
      // имитация отправки запроса на сервер  и ожидания ответа, чтобы увидеть лоадер
      let sendingOrder = setInterval(() => {
        this.successOrder = false;
        this.orderSent = true;
        this.formValues = {
          productTitle: '',
          name: '',
          phone: '',
        }
        clearInterval(sendingOrder);
      }, 1000);
    }
  }

  private isValidField(fieldValue: string, options: {[key: string]: RegExp | string} | null = null): boolean {
    if (!options) {
      return !!fieldValue;
    } else if (options['pattern']) {
      return !!fieldValue.match(options['pattern']);
    }
    return false
  }

  public checkField (key: string) {
    if (this.initialCheck) return;
    let options: {} | null = null;
    if (key === 'phone') {
      options = {pattern: /^\d{10}$/}
    }
    this.formInValidCheck[key] = !this.isValidField(this.formValues[key], options);
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
