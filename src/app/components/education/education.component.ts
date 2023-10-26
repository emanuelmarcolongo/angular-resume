import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  @Input() headerInfo!: any;

  additionalInfo: { [key: number]: boolean };

  constructor() {
    this.additionalInfo = {
      0: false,
      1: false,
      2: false,
      3: false,
    };
  }

  toggleAdditionalInfo(index: number) {
    this.additionalInfo[index] = !this.additionalInfo[index];
  }
}
