import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
        github: 'https://www.github.com/emanuelmarcolongo/',
      },
      about: `Desenvolvedor web full stack e apaixonado por programação. Desde que conheci essa área no começo de 2022,
       me senti muito motivado em pensar
       e resolver problemas através dos códigos. Desde então busco aprender e refinar meus conhecimentos a cada dia!`,
      location: 'Cabo Frio - RJ',
      phone: '(22) 99863-8785',
      email: 'emanuelmarcolongo@gmail.com',
      education: [
        {
          institution: 'Descomplica',
          type: 'Superior',
          course: 'Bacharelado - Ciência da Computação',
          startDate: '07-2023',
          conclusionDate: '07-2027',
          aditionalInfo:
            'Curso superior em Ciência da Computação com foco em desenvolvimento full stack',
        },
        {
          institution: 'Driven Education',
          type: 'Bootcamp',
          course: 'Desenvolvimento Web Full Stack',
          startDate: '07-2022',
          conclusionDate: '05-2023',
          aditionalInfo: 'Bootcamp de desenvolvimento full stack ',
        },
        {
          institution: 'Ada Tech',
          type: 'Bootcamp',
          course: 'Desenvolvimento Web FrontEnd - Angular',
          startDate: '07-2023',
          conclusionDate: '11-2023',
          aditionalInfo: 'Bootcamp de desenvolvimento front-end com o Angular ',
        },
        {
          institution: 'Cubos Academy',
          type: 'Bootcamp',
          course: 'Desenvolvimento Web BackEnd - Node',
          startDate: '07-2023',
          conclusionDate: '11-2023',
          aditionalInfo:
            'Bootcamp de desenvolvimento back-end com Node/Express ',
        },
      ],
    };
  }
}
