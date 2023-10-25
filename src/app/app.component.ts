import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-resume';
  resumeInfo!: any;
  headerInfo: any;

  constructor() {
    this.headerInfo = {
      firstName: 'Carlos Emanuel',
      lastName: 'Marcolongo',
      job: 'Desenvolvedor Web',
      socials: {
        linkedin: 'https://www.linkedin.com/in/emanuelmarcolongo/',
        github: 'https://www.github.com/emanuelmarcolongo/'
      }
    }
  }
}
