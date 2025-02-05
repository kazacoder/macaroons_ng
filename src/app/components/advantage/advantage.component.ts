import {Component, Input, OnInit} from '@angular/core';
import {AdvantageType} from "../../types";

@Component({
  selector: 'advantage-component',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {

  @Input() advantage: AdvantageType;
  @Input() index: number = 0;

  constructor() {
    this.advantage = {
      title: '',
      text: '',
    }
  }

  ngOnInit(): void {
  }

}
