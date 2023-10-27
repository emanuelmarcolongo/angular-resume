import { Component, Input } from '@angular/core';
import { EducationInfoData } from 'src/app/models/resume-info.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  @Input() educationInfo!: EducationInfoData[];

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
