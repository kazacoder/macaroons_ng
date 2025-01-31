import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() burgerMenuOpen: boolean = false;
  @Input() phone: string = '';
  @Input() productsElement!: HTMLElement;
  @Input() advantagesElement!: HTMLElement;
  @Input() orderElement!: HTMLElement;

  @ViewChild(AppComponent)
  appComponent!: AppComponent;

  @Output() scrollToEvent: EventEmitter<HTMLElement> = new EventEmitter<HTMLElement>();

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(target: HTMLElement) {
    this.scrollToEvent.emit(target);
  }

}
