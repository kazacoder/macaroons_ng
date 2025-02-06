import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  @Input() burgerMenuOpen: boolean = false;
  @Input() phone: string;
  @Input() productsElement!: HTMLElement;
  @Input() advantagesElement!: HTMLElement;
  @Input() orderElement!: HTMLElement;


  @Output() scrollToEvent: EventEmitter<HTMLElement> = new EventEmitter<HTMLElement>();

  constructor() {
    this.phone = ''
  }

  public scrollTo(target: HTMLElement) {
    this.scrollToEvent.emit(target);
  }

}
