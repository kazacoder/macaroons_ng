import {Component} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  instagramLink: string = '';
  phone: string = '';
  constructor(private appComponent: AppComponent) {
    this.instagramLink = this.appComponent.instagramLink
    this.phone = this.appComponent.phone
  }

}
